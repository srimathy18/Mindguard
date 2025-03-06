import { motion } from 'framer-motion';


const About = () => {
 

  return (
    <div className="relative from-[#E0D7FF] to-[#F5F5F5] text-black min-h-screen flex flex-col md:flex-row items-center px-8 py-2 mt-[-35px]">
      
      {/* Left Side - Images */}
      <motion.div
        className="relative flex justify-center items-center w-[380px] h-[270px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Back Image */}
        <motion.img
          src="./ab2.jpg"
          className="absolute top-0 left-20 w-[290px] h-[190px] rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Front Image */}
        <motion.img
          src="./ab1.jpg"
          className="relative w-[320px] h-[220px] rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-[#333] text-center">About</h1>
        <div className="w-20 h-1 bg-purple-700 mt-2 mb-8 ml-60"></div>

        {/* Description */}
        <p className="text-lg text-gray-800 leading-relaxed ml-8 -mr-[40px]">
          The{' '}
          <span className="text-blue-600 font-semibold">
            Neuro-Linguistic Psychometric Adversarial Prognosis (NL-PAP)
            Framework
          </span>{' '}
          is an AI-powered system designed to predict and monitor mental health
          trends. By analyzing neuro-linguistic patterns and psychometric data,
          it provides data-driven insights for early detection of mood
          disorders.
        </p>

        <p className="mt-6 text-lg text-gray-800 leading-relaxed ml-8 -mr-[40px]">
          Using cutting-edge machine learning & deep learning models, NL-PAP
          detects sentiment volatility, emotional fluctuations, and mental
          health risks. With explainable AI insights, users and mental health
          professionals can track emotional patterns and intervene proactively.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
