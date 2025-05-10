import React, { useState, useEffect } from "react";
import {
  Check,
  Clock,
  AlertCircle,
  PlusCircle,
  Brain,
  Activity,
  Flame,
  ThermometerSun,
  Zap,
  Star,
  Heart,
  Shield,
  Sparkles,
  Target,
  Award,
  Lightbulb,
  Bookmark,
  RefreshCw,
  Trophy,
} from "lucide-react";

function ChatbotSuggestionPage() {
  // Exercise recommendations data
  const exerciseRecommendations = {
    Depression: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try 10 minutes of deep breathing 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Go for a 15-minute walk in nature 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Practice guided meditation 🔄",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Write down 3 things you're grateful for 🧘",
          image:
            "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do light stretching or yoga for 10 minutes 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Listen to calming music 🔄",
          image:
            "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Engage in a hobby you enjoy 🧘",
          image:
            "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Call a friend and have a short chat 🏃",
          image:
            "https://images.pexels.com/photos/5793913/pexels-photo-5793913.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Do a short 5-minute mindfulness exercise 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
    },
    Anxiety: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try progressive muscle relaxation 🧘",
          image:
            "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Use the 4-7-8 breathing technique 🏃",
          image:
            "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Write down your thoughts to clear your mind 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Listen to nature sounds or white noise 🧘",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Take a 15-minute break from screens 🏃",
          image:
            "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Try a short visualization exercise 🔄",
          image:
            "https://images.pexels.com/photos/3822620/pexels-photo-3822620.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Practice slow, deep breathing for 5 minutes 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Drink herbal tea and relax 🏃",
          image:
            "https://images.pexels.com/photos/5501104/pexels-photo-5501104.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Read a book for 10 minutes 🔄",
          image:
            "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg",
        },
      ],
    },
    Bipolar: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try a calming breathing exercise 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do some light walking or stretching 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Establish a calming bedtime routine 🔄",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Listen to relaxing music or sounds 🧘",
          image:
            "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Take a 10-minute break and walk outside 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Use a mood tracking app 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Engage in a hobby to distract your mind 🧘",
          image:
            "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do 10 minutes of gentle yoga 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Set a daily routine for self-care 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
    },
    OCD: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try deep breathing or mindfulness 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do a 5-minute grounding exercise 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Use a journal to organize your thoughts 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Engage in a guided relaxation session 🧘",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Take a 10-minute walk outdoors 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Practice positive affirmations 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Use calming essential oils 🧘",
          image:
            "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do a 5-minute stretching routine 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Set up a time to relax every day 🔄",
          image:
            "https://images.pexels.com/photos/3822620/pexels-photo-3822620.jpeg",
        },
      ],
    },
    PTSD: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try progressive muscle relaxation 🧘",
          image:
            "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Go for a nature walk 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Start journaling your thoughts 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Engage in deep breathing exercises 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do light stretching 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Limit social media exposure 🔄",
          image:
            "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Practice mindfulness 🧘",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Talk to a trusted friend 🏃",
          image:
            "https://images.pexels.com/photos/5793913/pexels-photo-5793913.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Spend time with loved ones 🔄",
          image:
            "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
        },
      ],
    },
    Schizophrenia: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try guided breathing 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Take short walks 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Stick to a strict routine 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Engage in a mindfulness session 🧘",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Exercise for 10 minutes 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Set daily goals 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Practice slow breathing 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Join a social group 🏃",
          image:
            "https://images.pexels.com/photos/5793913/pexels-photo-5793913.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Practice self-care daily 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
    },
    ADHD: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try breathing exercises 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Go for a brisk walk 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Use a planner to organize your day 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Use relaxation apps 🧘",
          image:
            "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Take a short break every hour 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Break tasks into smaller steps 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Practice meditation 🧘",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do yoga 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Use timers for task management 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
    },
    BPD: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Practice deep breathing 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Go for a jog 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Write your emotions in a journal 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Try guided imagery 🧘",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Take a break to clear your mind 🏃",
          image:
            "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Limit caffeine intake 🔄",
          image:
            "https://images.pexels.com/photos/5501104/pexels-photo-5501104.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Use aromatherapy 🧘",
          image:
            "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Engage in gentle stretching 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Talk to someone you trust 🔄",
          image:
            "https://images.pexels.com/photos/5793913/pexels-photo-5793913.jpeg",
        },
      ],
    },
    EatingDisorders: {
      "High Risk": [
        {
          type: "Relaxation",
          suggestion: "Try guided meditation 🧘",
          image:
            "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Engage in mindful walking 🏃",
          image:
            "https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Use positive affirmations 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
      "Moderate Risk": [
        {
          type: "Relaxation",
          suggestion: "Practice mindful eating 🧘",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Go for a walk with a friend 🏃",
          image:
            "https://images.pexels.com/photos/5793913/pexels-photo-5793913.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Journal about your day 🔄",
          image:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
        },
      ],
      "Low Risk": [
        {
          type: "Relaxation",
          suggestion: "Listen to calming music 🧘",
          image:
            "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg",
        },
        {
          type: "Activity",
          suggestion: "Do gentle stretching 🏃",
          image:
            "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
        },
        {
          type: "Habit",
          suggestion: "Practice self-compassion daily 🔄",
          image:
            "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg",
        },
      ],
    },
  };

  // State management
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("");
  const [habitData, setHabitData] = useState({});
  const [showAddAnimation, setShowAddAnimation] = useState(null);

  // Load habit data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("habitTrackerData");
    if (storedData) {
      setHabitData(JSON.parse(storedData));
    }
  }, []);

  // Save habit data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("habitTrackerData", JSON.stringify(habitData));
  }, [habitData]);

  // Handle condition change
  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
    setSelectedRiskLevel("");
  };

  // Handle risk level change
  const handleRiskLevelChange = (e) => {
    setSelectedRiskLevel(e.target.value);
  };

  // Get habit status for a given index
  const getHabitStatus = (index) => {
    const key = `${selectedCondition}-${selectedRiskLevel}-${index}`;
    return habitData[key]?.status || "pending";
  };

  // Get completed count for a given index
  const getCompletedCount = (index) => {
    const key = `${selectedCondition}-${selectedRiskLevel}-${index}`;
    return habitData[key]?.completedCount || 0;
  };

  // Handle status change for a habit
  const handleStatusChange = (index, status) => {
    const key = `${selectedCondition}-${selectedRiskLevel}-${index}`;
    setHabitData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        status,
      },
    }));
  };

  // Handle adding to completion count
  const handleAddCount = (index) => {
    const key = `${selectedCondition}-${selectedRiskLevel}-${index}`;
    const currentCount = habitData[key]?.completedCount || 0;

    setHabitData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        completedCount: currentCount + 1,
      },
    }));

    setShowAddAnimation(index);
    setTimeout(() => {
      setShowAddAnimation(null);
    }, 1000);
  };

  // Get appropriate background and text color for each type
  const getTypeStyles = (type) => {
    switch (type) {
      case "Relaxation":
        return "bg-gradient-to-r from-blue-500 to-cyan-400 text-white";
      case "Activity":
        return "bg-gradient-to-r from-green-500 to-emerald-400 text-white";
      case "Habit":
        return "bg-gradient-to-r from-purple-500 to-fuchsia-400 text-white";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-400 text-white";
    }
  };

  // Get appropriate icon for each type
  const getTypeIcon = (type) => {
    switch (type) {
      case "Relaxation":
        return <Brain className="w-4 h-4" />;
      case "Activity":
        return <Activity className="w-4 h-4" />;
      case "Habit":
        return <Flame className="w-4 h-4" />;
      default:
        return null;
    }
  };

  // Get appropriate button styles based on status and current button
  const getButtonStyles = (currentStatus, buttonStatus) => {
    if (currentStatus === buttonStatus) {
      if (buttonStatus === "completed")
        return "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md";
      if (buttonStatus === "skipped")
        return "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-md";
      if (buttonStatus === "pending")
        return "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md";
    }

    return "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400 transition-colors";
  };

  // Get suggestions based on selected options
  const getSuggestions = () => {
    if (
      selectedCondition &&
      selectedRiskLevel &&
      exerciseRecommendations[selectedCondition] &&
      exerciseRecommendations[selectedCondition][selectedRiskLevel]
    ) {
      return exerciseRecommendations[selectedCondition][selectedRiskLevel];
    }
    return [];
  };

  // Get condition icon
  const getConditionIcon = (condition) => {
    switch (condition) {
      case "Depression":
        return <Heart className="w-5 h-5 mr-1 text-pink-600" />;
      case "Anxiety":
        return <Zap className="w-5 h-5 mr-1 text-yellow-500" />;
      case "Bipolar":
        return <RefreshCw className="w-5 h-5 mr-1 text-purple-600" />;
      case "OCD":
        return <Clock className="w-5 h-5 mr-1 text-blue-600" />;
      case "PTSD":
        return <Shield className="w-5 h-5 mr-1 text-red-600" />;
      case "Schizophrenia":
        return <Brain className="w-5 h-5 mr-1 text-indigo-600" />;
      case "ADHD":
        return <Flame className="w-5 h-5 mr-1 text-orange-500" />;
      case "BPD":
        return <Activity className="w-5 h-5 mr-1 text-teal-600" />;
      case "EatingDisorders":
        return <AlertCircle className="w-5 h-5 mr-1 text-amber-600" />;
      default:
        return <Lightbulb className="w-5 h-5 mr-1 text-gray-600" />;
    }
  };

  // Get risk level icon
  const getRiskLevelIcon = (riskLevel) => {
    switch (riskLevel) {
      case "High Risk":
        return <ThermometerSun className="w-5 h-5 mr-1 text-red-500" />;
      case "Moderate Risk":
        return <ThermometerSun className="w-5 h-5 mr-1 text-yellow-500" />;
      case "Low Risk":
        return <ThermometerSun className="w-5 h-5 mr-1 text-green-500" />;
      default:
        return <ThermometerSun className="w-5 h-5 mr-1 text-gray-500" />;
    }
  };

  // Get risk level color
  const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel) {
      case "High Risk":
        return "bg-gradient-to-r from-red-100 to-rose-100 border-red-300";
      case "Moderate Risk":
        return "bg-gradient-to-r from-amber-100 to-yellow-100 border-yellow-300";
      case "Low Risk":
        return "bg-gradient-to-r from-emerald-100 to-green-100 border-green-300";
      default:
        return "bg-white border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header with animated gradient */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 pb-2">
              Mental Health Habit Tracker
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Select your condition and risk level, then track your daily habits
            for improved mental well-being
          </p>
        </div>

        {/* Selection Dropdowns - Further Improved UI */}
        <div className="bg-white p-7 rounded-2xl shadow-xl mb-10 border border-gray-200 transform transition-all hover:shadow-2xl backdrop-blur-sm bg-opacity-90">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Target className="mr-2 h-5 w-5 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Personalize Your Recommendations
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="condition"
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <Brain className="mr-1 h-4 w-4 text-indigo-600" />
                Mental Health Condition
              </label>
              <div className="relative group">
                <select
                  id="condition"
                  value={selectedCondition}
                  onChange={handleConditionChange}
                  className="w-full pl-12 rounded-xl border-2 border-indigo-100 p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all focus:border-transparent shadow-md group-hover:border-indigo-300 appearance-none"
                >
                  <option value="" disabled>
                    Select a condition
                  </option>
                  {Object.keys(exerciseRecommendations).map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="p-1.5 rounded-full bg-indigo-100">
                    {selectedCondition ? (
                      getConditionIcon(selectedCondition)
                    ) : (
                      <Brain className="w-5 h-5 text-indigo-500" />
                    )}
                  </span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="riskLevel"
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <ThermometerSun className="mr-1 h-4 w-4 text-indigo-600" />
                Risk Level
              </label>
              <div className="relative group">
                <select
                  id="riskLevel"
                  value={selectedRiskLevel}
                  onChange={handleRiskLevelChange}
                  className="w-full pl-12 rounded-xl border-2 border-indigo-100 p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all focus:border-transparent shadow-md group-hover:border-indigo-300 appearance-none"
                  disabled={!selectedCondition}
                >
                  <option value="" disabled>
                    Select risk level
                  </option>
                  {selectedCondition &&
                    exerciseRecommendations[selectedCondition] &&
                    Object.keys(exerciseRecommendations[selectedCondition]).map(
                      (riskLevel) => (
                        <option key={riskLevel} value={riskLevel}>
                          {riskLevel}
                        </option>
                      )
                    )}
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="p-1.5 rounded-full bg-indigo-100">
                    {selectedRiskLevel ? (
                      getRiskLevelIcon(selectedRiskLevel)
                    ) : (
                      <ThermometerSun className="w-5 h-5 text-indigo-500" />
                    )}
                  </span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Habit Cards - Enhanced UI with wider cards and shorter height */}
        {selectedCondition && selectedRiskLevel && (
          <div className="mb-8">
            <div
              className={`rounded-xl p-5 mb-6 ${getRiskLevelColor(
                selectedRiskLevel
              )} border shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getConditionIcon(selectedCondition)}
                  <h2 className="text-2xl font-bold text-gray-800 mr-6">
                    {selectedCondition}
                  </h2>
                  <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                    {getRiskLevelIcon(selectedRiskLevel)}
                    <span className="font-semibold">{selectedRiskLevel}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="px-4 py-1.5 bg-white rounded-full shadow-sm text-sm">
                    <Bookmark className="inline-block w-4 h-4 mr-1 text-indigo-500" />
                    <span className="font-medium text-gray-700">
                      Personalized Recommendations
                    </span>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mt-3 ml-7">
                These habits are tailored to help manage your specific condition
                and risk level. Track your progress daily for the best results.
              </p>
            </div>

            <div className="grid grid-flow-col auto-cols-max gap-5 overflow-x-auto pb-6 hide-scrollbar pr-4">
              {getSuggestions().map((suggestion, index) => {
                const status = getHabitStatus(index);
                const completedCount = getCompletedCount(index);

                return (
                  <div
                    key={`${selectedCondition}-${selectedRiskLevel}-${index}`}
                    className="flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden w-96 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <img
                        src={suggestion.image}
                        alt={suggestion.suggestion}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                      <div className="absolute top-3 right-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full ${getTypeStyles(
                            suggestion.type
                          )} shadow-md`}
                        >
                          {getTypeIcon(suggestion.type)}
                          <span>{suggestion.type}</span>
                        </span>
                      </div>
                      {status === "completed" && (
                        <div className="absolute bottom-3 right-3 bg-green-500 rounded-full p-1.5 shadow-lg">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="p-4 relative">
                      {showAddAnimation === index && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Sparkles className="h-20 w-20 text-yellow-400 animate-sparkle" />
                        </div>
                      )}
                      <div className="relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 via-purple-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                        <h4
                          className="text-lg font-bold bg-gradient-to-r from-gray-800 via-indigo-900 to-gray-800 bg-clip-text text-transparent mb-3 line-clamp-2 h-12 hover:text-indigo-700 transition-colors duration-300 animate-fadeIn relative z-10"
                          title={suggestion.suggestion}
                        >
                          {suggestion.suggestion}
                        </h4>

                        <div className="absolute -left-2 -top-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-1">
                          <div className="relative">
                            <Sparkles className="h-6 w-6 text-yellow-500 animate-float absolute" />
                            <Sparkles className="h-4 w-4 text-yellow-400 animate-float absolute top-1 left-1" />
                          </div>
                        </div>

                        <div className="absolute -right-2 -top-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-1">
                          <div className="relative">
                            <Star className="h-6 w-6 text-amber-500 animate-float absolute" />
                            <Star className="h-3 w-3 text-amber-400 animate-pulse absolute top-1.5 left-1.5" />
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      </div>

                      <div className="mt-3 animate-slideUp">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-gray-600 flex items-center">
                            <Activity className="h-4 w-4 mr-1.5 text-indigo-500" />
                            Status:
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              className={`rounded-full ${getButtonStyles(
                                status,
                                "pending"
                              )} hover:scale-110 transition-all duration-300 flex items-center justify-center w-9 h-9 shadow-sm hover:shadow-md`}
                              onClick={() =>
                                handleStatusChange(index, "pending")
                              }
                              aria-label="Mark as pending"
                              title="Pending"
                            >
                              <Clock className="h-4 w-4" />
                            </button>
                            <button
                              className={`rounded-full ${getButtonStyles(
                                status,
                                "completed"
                              )} hover:scale-110 transition-all duration-300 flex items-center justify-center w-9 h-9 shadow-sm hover:shadow-md`}
                              onClick={() =>
                                handleStatusChange(index, "completed")
                              }
                              aria-label="Mark as completed"
                              title="Completed"
                            >
                              <Check className="h-4 w-4" />
                            </button>
                            <button
                              className={`rounded-full ${getButtonStyles(
                                status,
                                "skipped"
                              )} hover:scale-110 transition-all duration-300 flex items-center justify-center w-9 h-9 shadow-sm hover:shadow-md`}
                              onClick={() =>
                                handleStatusChange(index, "skipped")
                              }
                              aria-label="Mark as skipped"
                              title="Skipped"
                            >
                              <AlertCircle className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="relative group">
                            <div className="flex items-center bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-colors duration-300 rounded-lg px-3 py-1.5 text-indigo-800 shadow-sm border border-indigo-100 group-hover:border-indigo-300">
                              <Award className="h-4 w-4 mr-1.5 text-yellow-500 animate-pulse" />
                              <span className="text-sm font-bold">
                                {completedCount}{" "}
                                {completedCount === 1 ? "time" : "times"}
                              </span>
                            </div>
                            <div className="absolute -top-2 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="relative">
                                <Trophy className="h-4 w-4 text-yellow-500 animate-bounce" />
                              </div>
                            </div>
                          </div>

                          <button
                            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white flex items-center text-sm font-medium px-3 py-1.5 rounded-lg hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg group"
                            onClick={() => handleAddCount(index)}
                            title="Add to completion count"
                          >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-gradient-x"></span>
                            <PlusCircle className="h-4 w-4 mr-1.5 group-hover:animate-ping" />
                            <span className="relative z-10">Add Count</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <style>
          {`
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
                transform: scale(1);
              }
              50% {
                opacity: 0.6;
                transform: scale(1.2);
              }
            }
            
            @keyframes sparkle {
              0% {
                opacity: 0;
                transform: scale(0.8) rotate(0deg);
              }
              25% {
                opacity: 1;
                transform: scale(1.2) rotate(45deg);
              }
              50% {
                opacity: 1;
                transform: scale(1.4) rotate(90deg);
              }
              75% {
                opacity: 0.8;
                transform: scale(1.2) rotate(135deg);
              }
              100% {
                opacity: 0;
                transform: scale(0.8) rotate(180deg);
              }
            }
            
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-5px);
              }
            }
            
            @keyframes ping {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              75%, 100% {
                transform: scale(1.5);
                opacity: 0;
              }
            }
            
            @keyframes gradient-x {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
            
            @keyframes shine {
              from {
                background-position: -100% 0;
              }
              to {
                background-position: 200% 0;
              }
            }
            
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
              }
              50% {
                transform: translateY(-10px);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
              }
            }
            
            .animate-fadeIn {
              animation: fadeIn 0.6s ease-out;
            }
            
            .animate-slideUp {
              animation: slideUp 0.8s ease-out;
            }
            
            .animate-float {
              animation: float 2s ease-in-out infinite;
            }
            
            .animate-sparkle {
              animation: sparkle 1s ease-in-out;
            }
            
            .animate-pulse {
              animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            
            .animate-ping {
              animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
            
            .animate-bounce {
              animation: bounce 1s infinite;
            }
            
            .animate-gradient-x {
              animation: gradient-x 3s ease infinite;
              background-size: 200% 200%;
            }
            
            .animate-shine {
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
              background-size: 200% 100%;
              animation: shine 2s infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default ChatbotSuggestionPage;


