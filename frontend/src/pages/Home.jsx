import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../pages/About.jsx';
import Feature from '../components/Feature.jsx';
import UserSteps from '../components/Steps';
import Footer from '../components/Footer.jsx';
import { Brain } from 'lucide-react';


const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleGetStarted = () => {
    navigate(token ? "/dashboard" : "/login");
  };

  const stars = useMemo(() => [...Array(40)].map((_, i) => ({
    id: `star-${i}`,
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
  })), []);

const starlinks = useMemo(() => [...Array(10)].map((_, i) => ({
    id: `starlink-${i}`,
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    rotate: `${Math.random() * 360}deg`,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 5,
  })), []);

const glowingParticles = useMemo(() => [...Array(20)].map((_, i) => ({
    id: `glow-${i}`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    duration: 4 + Math.random() * 2
})), []);

return (
  <div className="w-full overflow-x-hidden">
    <div className="relative w-full flex flex-col items-start justify-center text-white pb-40 min-h-screen pl-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500 to-pink-500"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      />

      {/* Stars and Starlinks */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: star.top, left: star.left }}
            animate={{ y: ['0vh', '100vh'], opacity: [1, 0] }}
            transition={{ duration: star.duration, repeat: Infinity, ease: 'linear', delay: star.delay }}
          />
        ))}

        {starlinks.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-0.5 h-6 bg-white/80 rounded-full shadow-lg"
            style={{ top: star.top, left: star.left, rotate: star.rotate }}
            animate={{ y: ['-10vh', '110vh'], opacity: [0, 1, 0] }}
            transition={{ duration: star.duration, repeat: Infinity, ease: 'linear', delay: star.delay }}
          />
        ))}

        {/* Glowing Particles */}
        {glowingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-300 rounded-full shadow-lg"
            animate={{
              x: [0, particle.x],
              y: [0, particle.y],
              boxShadow: [
                "0px 0px 10px rgba(59,130,246,0.9)",
                "0px 0px 15px rgba(59,130,246,0.7)",
                "0px 0px 20px rgba(59,130,246,0.5)",
              ],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: particle.top,
              left: particle.left,
            }}
          />
        ))}
      </div>

        <motion.div 
          className="relative z-10 text-left p-6 mt-28 max-w-lg"
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-bold mt-0 whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          >
            Welcome to <span className="text-white/60">MindGuard</span> 
            <img src="/logo.png" alt="MindGuard Logo" className="w-12 h-12 md:w-16 md:h-16 inline" />
          </motion.h3>

          <motion.p className="mt-4 text-lg md:text-xl">Neuro-Linguistic Psychometric Adversarial Prognosis</motion.p>

          <motion.p className="mt-2 text-md md:text-lg">
            Empowering minds with cutting-edge AI. MindGuard combines Neuro-Linguistic Processing,
            Psychometric Analysis, and Deep Learning to provide real-time mental health insights,
            early risk detection, and proactive emotional support.
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2, y: -3, boxShadow: "0px 5px 15px rgba(59,130,246,0.6)" }}
            onClick={handleGetStarted}
          >
            Get Started
          </motion.button>
        </motion.div>

        <div className="flex w-full justify-end pr-10 -mt-100">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>
                <Brain size={200} className="text-blue-200" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
          </div>
 
        <div className="mt-10 ml-60 bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-2xl shadow-2xl w-[700px] max-w-full flex items-center justify-start">
          <img 
            src="/light.jpg" 
            alt="MindGuard" 
            className="max-h-[700px] md:max-h-[500px] object-contain rounded-2xl opacity-75 brightness-90 contrast-95"
          />
        </div>

        <div className="absolute bottom-[-5px] left-0 w-full">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192V320H0Z"
            ></path>
          </svg>
        </div>
      </div>

      <About />
      <Feature />
      <UserSteps />
      <Footer />
    </div>
  );
}

export default Home;
