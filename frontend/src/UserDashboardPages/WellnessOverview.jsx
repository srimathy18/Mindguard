import React, { useEffect, useState } from "react";

const dummyData = {
  sentimentStatus: "Positive",
  disorderPrediction: "None",
  riskLevel: "Low",
  detailedInsights: [
    {
      title: "Mood Stability",
      description: "Your mood has remained stable over the past week.",
      icon: "😊",
    },
    {
      title: "Sleep Quality",
      description: "Your sleep quality was excellent last night.",
      icon: "😴",
    },
    {
      title: "Activity Level",
      description: "You've increased your daily physical activity by 20%.",
      icon: "🏃",
    },
  ],
};

const WellnessOverview = () => {
  const [overviewData, setOverviewData] = useState({
    sentimentStatus: "",
    disorderPrediction: "",
    riskLevel: "",
    detailedInsights: [],
  });
  const [loading, setLoading] = useState(true);

  // Fetch real-time data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/overview-data"); // dummy  API endpoint
        const data = await response.json();
        setOverviewData(data);
      } catch (error) {
        console.error("Error fetching overview data, using dummy data:", error);
        // Fallback to dummy data for development purposes
        setOverviewData(dummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading data...</div>;
  }

  // Mapping for sentiment and risk status icons
  const sentimentMap = {
    Positive: { emoji: "🟢" },
    Neutral: { emoji: "🟡" },
    Negative: { emoji: "🔴" },
  };

  const riskMap = {
    Low: { emoji: "🟢" },
    Moderate: { emoji: "🟡" },
    High: { emoji: "🔴" },
  };

  const sentimentDetails =
    sentimentMap[overviewData.sentimentStatus] || { emoji: "ℹ️" };

  const riskDetails =
    riskMap[overviewData.riskLevel] || { emoji: "ℹ️" };

  const disorderPredictionDisplay = overviewData.disorderPrediction || "None";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Wellness Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Sentiment Status Card */}
        <div className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 flex flex-col items-center">
          <div className="text-7xl mb-4">{sentimentDetails.emoji}</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Sentiment</h3>
          <p className="text-xl text-gray-600">
            {overviewData.sentimentStatus || "Unknown"}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Current emotional state indicator.
          </p>
        </div>
        {/* Disorder Prediction Card */}
        <div className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 flex flex-col items-center">
          <div className="text-7xl mb-4">💡</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Disorder Prediction
          </h3>
          <p className="text-xl text-gray-600">{disorderPredictionDisplay}</p>
          <p className="text-sm text-gray-500 mt-2">
            E.g., Anxiety, Depression, or None.
          </p>
        </div>
        {/* Risk Level Card */}
        <div className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 flex flex-col items-center">
          <div className="text-7xl mb-4">{riskDetails.emoji}</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Risk Level
          </h3>
          <p className="text-xl text-gray-600">
            {overviewData.riskLevel || "Unknown"}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Current risk assessment.
          </p>
        </div>
      </div>

      {/* Detailed Insights Section */}
      <div className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Detailed Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {overviewData.detailedInsights && overviewData.detailedInsights.length > 0 ? (
            overviewData.detailedInsights.map((insight, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 shadow-md flex flex-col items-center">
                <div className="text-5xl mb-4">{insight.icon}</div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">{insight.title}</h4>
                <p className="text-gray-600 text-center">{insight.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No detailed insights available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WellnessOverview;
