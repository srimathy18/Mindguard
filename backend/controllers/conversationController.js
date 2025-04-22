import Conversation from "../models/conversationModel.js";

// Create new conversation entry
export const createConversation = async (req, res) => {
    try {
      const { messages } = req.body;
      const userId = req.userId; // from auth middleware
  
      if (!messages || messages.length === 0) {
        return res.status(400).json({ message: "Messages are required" });
      }
  
      const conversation = new Conversation({
        userId,
        messages,
      });
  
      const saved = await conversation.save();
      res.status(201).json(saved);
    } catch (error) {
      console.error("Error saving conversation:", error);
      res.status(500).json({ message: "Server error while saving conversation" });
    }
  };
  
  // Get all conversations for a user
  export const getUserConversations = async (req, res) => {
    try {
      const userId = req.userId;
      const conversations = await Conversation.find({ userId }).sort({ createdAt: -1 });
      res.status(200).json(conversations);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      res.status(500).json({ message: "Server error fetching conversations" });
    }
  };
  
  // Get single conversation by ID
  export const getConversationById = async (req, res) => {
    try {
      const { id } = req.params;
      const conversation = await Conversation.findOne({ _id: id, userId: req.userId });
  
      if (!conversation) {
        return res.status(404).json({ message: "Conversation not found" });
      }
  
      res.status(200).json(conversation);
    } catch (error) {
      console.error("Error fetching conversation:", error);
      res.status(500).json({ message: "Server error fetching conversation" });
    }
  };
  
