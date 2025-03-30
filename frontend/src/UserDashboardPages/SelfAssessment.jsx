import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const SelfAssessment = () => {
  const [mood, setMood] = useState(50);
  const [stress, setStress] = useState(50);
  const [sleep, setSleep] = useState(50);
  const [history, setHistory] = useState([]);

  const handleSubmit = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood,
      stress,
      sleep,
    };
    setHistory([...history, newEntry]);
  };

  const moodTrackingData = {
    labels: history.map((entry) => entry.date),
    datasets: [
      {
        label: "Mood Level",
        data: history.map((entry) => entry.mood),
        borderColor: "#297194",
        backgroundColor: "rgba(41, 113, 148, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Self-Assessment & Tracking Results
      </h2>
      
      {/* Self-Assessment Form */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 mb-8">
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Self-Assessment</h3>
        <label className="block mb-2">Mood Level: {mood}</label>
        <input type="range" min="0" max="100" value={mood} onChange={(e) => setMood(e.target.value)} className="w-full mb-4" />
        <label className="block mb-2">Stress Level: {stress}</label>
        <input type="range" min="0" max="100" value={stress} onChange={(e) => setStress(e.target.value)} className="w-full mb-4" />
        <label className="block mb-2">Sleep Quality: {sleep}</label>
        <input type="range" min="0" max="100" value={sleep} onChange={(e) => setSleep(e.target.value)} className="w-full mb-4" />
        <button onClick={handleSubmit} className="bg-[#297194] text-white px-4 py-2 rounded-lg">Submit</button>
      </div>
      
      {/* Mood Tracking Graph */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 mb-8">
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Mood Tracking Graph</h3>
        <Line data={moodTrackingData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
      </div>

      {/* Assessment History */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5">
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Assessment History</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Mood</th>
              <th className="border px-4 py-2">Stress</th>
              <th className="border px-4 py-2">Sleep</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.date}</td>
                <td className="border px-4 py-2">{entry.mood}</td>
                <td className="border px-4 py-2">{entry.stress}</td>
                <td className="border px-4 py-2">{entry.sleep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelfAssessment;
