import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { User, FileText, Brain, BarChart, MessageCircle, ShieldCheck } from "lucide-react";

const steps = [
  { id: 1, title: "Sign Up / Login", description: "Users create an account or log in to access the platform.", icon: <User size={40} /> },
  { id: 2, title: "Submit Mental Health Survey", description: "User fills out a short questionnaire about their mental state.", icon: <FileText size={40} /> },
  { id: 3, title: "AI Analysis & Prediction", description: "Our AI model analyzes user input and predicts mental health trends.", icon: <Brain size={40} /> },
  { id: 4, title: "View Detailed Reports", description: "Users receive a detailed emotional analysis and trends.", icon: <BarChart size={40} /> },
  { id: 5, title: "Chat with AI Assistant", description: "Users can interact with the AI chatbot for mental health support.", icon: <MessageCircle size={40} /> },
  { id: 6, title: "Personalized Recommendations", description: "App suggests self-care tips, therapy resources, and mood tracking.", icon: <ShieldCheck size={40} /> },
];

const UserSteps = () => {
  return (
    <div className="relative min-h-screen text-white bg-gradient-to-r from-[#1A0128] to-[#E6E6FA] overflow-hidden">
      {/* SVG Waves at the Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,165.3C480,160,600,160,720,165.3C840,171,960,181,1080,192C1200,203,1320,213,1380,218.7L1440,224V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          ></path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1A0128" />
              <stop offset="100%" stopColor="#E6E6FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-white pt-24 mb-12 drop-shadow-lg">
        How Users Interact with the App
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="max-w-5xl mx-auto"
      >
        {steps.map((step) => (
          <SwiperSlide key={step.id}>
            <div className="bg-white p-8 w-full h-[320px] flex flex-col items-center justify-center rounded-xl shadow-lg border border-gray-200 space-y-4 text-center 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] hover:border-purple-400">
              
              {/* Step Number */}
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold shadow-md">
                {step.id}
              </div>

              {/* Icon */}
              <div className="text-purple-500">{step.icon}</div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-purple-700">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserSteps;
