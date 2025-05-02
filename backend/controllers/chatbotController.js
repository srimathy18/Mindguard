import Conversation from "../models/conversationModel.js";
import mongoose from 'mongoose';
import moment from 'moment'; 
const getChatbotResults = async (req, res) => {
  try {
    const userId = req.userId;

    // Use aggregation to get the most recent conversation based on the latest message timestamp
    const latestConvoAgg = await Conversation.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $addFields: {
          latestMessageTime: { $max: "$messages.createdAt" }
        }
      },
      { $sort: { latestMessageTime: -1 } },
      { $limit: 1 }
    ]);

    if (!latestConvoAgg.length || latestConvoAgg[0].messages.length < 2) {
      return res.status(404).json({ message: "No valid conversation found with at least 2 messages" });
    }

    const latestConversation = latestConvoAgg[0];
    const assistantMessage = latestConversation.messages.find(msg => msg.role === "assistant");

    if (!assistantMessage || !assistantMessage.content) {
      return res.status(404).json({ message: "No assistant message content found" });
    }

    const content = assistantMessage.content;

    // Regex parsing
    const sentimentMatch = content.match(/Sentiment: (\w+)\s+\((\d+)%\)/);
    const disorderMatch = content.match(/Disorder: ([\w\s]+)\s+\((\d+)%\)/);
    const riskMatch = content.match(/Risk Level: (\w+)/);
    const recommendationMatch = content.match(/Recommendation: (.+)/);
    const explanationMatch = content.match(/Explanation: The model's prediction is influenced by the following factors: (.+?)\./);

    let explanationKeywords = [];
    if (explanationMatch) {
      const explanationContent = explanationMatch[1];
      const wordWeightRegex = /"([^"]+)" contributes with a weight of (-?\d+\.\d+)/g;
      let match;
      while ((match = wordWeightRegex.exec(explanationContent)) !== null) {
        explanationKeywords.push({
          word: match[1],
          weight: parseFloat(match[2])
        });
      }
    }

    res.status(200).json({
      sentiment: sentimentMatch?.[1] || "Sentiment not found",
      sentiment_confidence: parseFloat(sentimentMatch?.[2] || "0"),
      disorder: disorderMatch?.[1] || "Disorder not found",
      disorder_confidence: parseFloat(disorderMatch?.[2] || "0"),
      risk: riskMatch?.[1] || "Risk Level not found",
      recommendations: recommendationMatch ? [recommendationMatch[1]] : [],
      explanation_keywords: explanationKeywords,
      lime_explanation: content.match(/LIME Explanation: (.+)/)?.[1] || "No LIME explanation found",
      raw_message: content,
      messages: latestConversation.messages,
    });

  } catch (error) {
    console.error("❌ Error extracting chatbot results:", error);
    res.status(500).json({ message: "Server error fetching chatbot results. Please try again later." });
  }
};



const getChatbotInsights = async (req, res) => {
  try {
    const userId = req.userId;

    const latestConversation = await Conversation.findOne({ userId }).sort({ createdAt: -1 });

    if (!latestConversation || !latestConversation.messages || latestConversation.messages.length < 2) {
      return res.status(404).json({ message: "No valid conversation found with at least 2 messages" });
    }

    const assistantMessages = latestConversation.messages.filter(msg => msg.role === "assistant");
    const assistantMessage = assistantMessages[assistantMessages.length - 1];

    if (!assistantMessage || !assistantMessage.content) {
      return res.status(404).json({ message: "No assistant message content found" });
    }

    const content = assistantMessage.content;

    const riskMatch = content.match(/Risk Level: (\w+)/);
    const recommendationMatch = content.match(/Recommendation: (.+)/);
    const explanationMatch = content.match(/Explanation: The model's prediction is influenced by the following factors: (.+?)\./);

    let explanationKeywords = [];
    if (explanationMatch) {
      const explanationContent = explanationMatch[1];
      const wordWeightRegex = /"([^"]+)" contributes with a weight of (-?\d+\.\d+)/g;
      let match;
      while ((match = wordWeightRegex.exec(explanationContent)) !== null) {
        explanationKeywords.push({
          word: match[1],
          weight: parseFloat(match[2])
        });
      }
    }

    res.status(200).json({
      risk: riskMatch?.[1] || "Risk Level not found",
      recommendations: recommendationMatch ? [recommendationMatch[1]] : [],
      explanation_keywords: explanationKeywords
    });

  } catch (error) {
    console.error("❌ Error extracting chatbot insights:", error);
    res.status(500).json({ message: "Server error fetching chatbot insights. Please try again later." });
  }
};

const getChatbotVisualInsights = async (req, res) => {
  try {
    const userId = req.userId;

    const latestConversation = await Conversation.findOne({ userId }).sort({ createdAt: -1 });

    if (!latestConversation || !latestConversation.messages || latestConversation.messages.length < 2) {
      return res.status(404).json({ message: "No valid conversation found with at least 2 messages" });
    }

    const assistantMessage = latestConversation.messages.find(msg => msg.role === "assistant");

    if (!assistantMessage || !assistantMessage.content) {
      return res.status(404).json({ message: "No assistant message content found" });
    }

    const content = assistantMessage.content;

    // Word impact (explanation)
    const explanationMatch = content.match(/Explanation: The model's prediction is influenced by the following factors: (.+?)\./);

    const wordCloud = [];
    if (explanationMatch) {
      const explanationContent = explanationMatch[1];
      const wordWeightRegex = /"([^"]+)" contributes with a weight of (-?\d+\.\d+)/g;
      let match;
      while ((match = wordWeightRegex.exec(explanationContent)) !== null) {
        wordCloud.push({
          word: match[1],
          weight: parseFloat(match[2])
        });
      }
    }

    // Heatmap info
    const sentimentMatch = content.match(/Sentiment: (\w+)\s+\((\d+)%\)/);
    const disorderMatch = content.match(/Disorder: ([\w\s]+)\s+\((\d+)%\)/);
    const riskMatch = content.match(/Risk Level: (\w+)/);

    res.status(200).json({
      wordCloud,
      emotionHeatmap: {
        sentiment: {
          label: sentimentMatch?.[1] || "Unknown",
          confidence: parseFloat(sentimentMatch?.[2] || "0"),
        },
        disorder: {
          label: disorderMatch?.[1] || "Unknown",
          confidence: parseFloat(disorderMatch?.[2] || "0"),
        },
        risk: riskMatch?.[1] || "Low",
      }
    });

  } catch (error) {
    console.error("❌ Error generating visual insights:", error);
    res.status(500).json({ message: "Server error fetching visual insights" });
  }
};

const getWordCloudData = async (req, res) => {
  try {
    const userId = req.userId;

    // Get user's conversations sorted by latest
    const conversations = await Conversation.find({ userId }).sort({ createdAt: -1 });

    const wordsWithWeights = [];

    for (const convo of conversations) {
      const assistantMessages = convo.messages.filter((msg) => msg.role === "assistant");

      for (const msg of assistantMessages) {
        const content = msg.content;

        const explanationMatch = content.match(/Explanation: The model's prediction is influenced by the following factors: (.+?)\./);

        if (explanationMatch) {
          const explanationContent = explanationMatch[1];
          const wordWeightRegex = /"([^"]+)" contributes with a weight of (-?\d+\.\d+)/g;
          let match;

          while ((match = wordWeightRegex.exec(explanationContent)) !== null) {
            wordsWithWeights.push({
              text: match[1],
              value: Math.abs(parseFloat(match[2])),
            });
          }
        }
      }
    }

    res.status(200).json({ words: wordsWithWeights });
  } catch (error) {
    console.error("Error fetching weighted word data:", error);
    res.status(500).json({ message: "Server error fetching word cloud data." });
  }
};




const getUserTrends = async (req, res) => {
  try {
    const userId = req.userId;

    // Get all conversations for the user
    const userConversations = await Conversation.find({ userId }).sort({ createdAt: 1 });

    const trendData = userConversations
      .map(convo => {
        const assistantMsg = convo.messages.find(msg => msg.role === "assistant");
        if (!assistantMsg) return null;

        const content = assistantMsg.content;
        const sentimentMatch = content.match(/Sentiment: (\w+)\s+\((\d+)%\)/);
        const disorderMatch = content.match(/Disorder: ([\w\s]+)\s+\((\d+)%\)/);
        const riskMatch = content.match(/Risk Level: (\w+)/);

        return {
          date: convo.createdAt.toISOString().split('T')[0],
          sentiment: sentimentMatch?.[1] || "Unknown",
          sentiment_confidence: parseFloat(sentimentMatch?.[2] || "0"),
          disorder: disorderMatch?.[1] || "Unknown",
          disorder_confidence: parseFloat(disorderMatch?.[2] || "0"),
          risk: riskMatch?.[1] || "Low"
        };
      })
      .filter(Boolean);

    res.json({ trendData });
  } catch (err) {
    console.error("Error fetching trend data", err);
    res.status(500).json({ message: "Server error fetching trend data" });
  }
};

const getRiskAnalysis = async (req, res) => {
  try {
    const userId = req.userId;
    const conversations = await Conversation.find({ userId }).sort({ createdAt: 1 });

    const alerts = conversations
      .map((convo) => {
        const assistantMsg = convo.messages.find((msg) => msg.role === "assistant");
        if (!assistantMsg) return null;

        const content = assistantMsg.content;
        const riskMatch = content.match(/Risk Level: (\w+)/);
        const recommendationMatch = content.match(/Recommendation: (.+)/);

        return {
          date: convo.createdAt,
          risk: riskMatch?.[1] || "Unknown",
          recommendation: recommendationMatch?.[1] || "No recommendation",
        };
      })
      .filter((a) => a && a.risk.toLowerCase() === "high");

    res.json({ alerts });
  } catch (error) {
    console.error("❌ Error fetching risk alerts:", error);
    res.status(500).json({ message: "Failed to fetch risk alerts." });
  }
};


const getUserRiskAlerts = async (req, res) => {
  try {
    const userId = req.userId;
    const userConversations = await Conversation.find({ userId }).sort({ createdAt: 1 });

    const alerts = [];

    userConversations.forEach(conv => {
      const assistantMsg = conv.messages.find(msg => msg.role === 'assistant');
      if (!assistantMsg) return;

      const content = assistantMsg.content;

      const riskMatch = content.match(/Risk Level: (\w+)/);
      const recommendationMatch = content.match(/Recommendation: (.+)/);

      if (riskMatch) {
        const riskLevel = riskMatch[1];
        alerts.push({
          createdAt: conv.createdAt,
          riskLevel,
          recommendation: recommendationMatch?.[1] || "No recommendation found",
        });
      }
    });

    res.status(200).json({ alerts });
  } catch (err) {
    console.error("❌ Error fetching risk alerts:", err);
    res.status(500).json({ message: "Server error fetching risk alerts" });
  }
};

const getAllUserChatbotReports = async (req, res) => {
  try {
    const userId = req.userId;
    const conversations = await Conversation.find({ userId }).sort({ createdAt: -1 });

    const reports = conversations
      .map((conv) => ({
        createdAt: conv.createdAt,
        messages: conv.messages,
      }))
      .filter(Boolean);

    res.status(200).json({ reports });
  } catch (err) {
    console.error("❌ Error fetching reports:", err);
    res.status(500).json({ message: "Failed to fetch reports" });
  }
};



export { getChatbotResults, getChatbotInsights,getChatbotVisualInsights,getUserTrends,getRiskAnalysis,getUserRiskAlerts ,getWordCloudData,getAllUserChatbotReports};
