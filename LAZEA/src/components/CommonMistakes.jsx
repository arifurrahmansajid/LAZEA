const CommonMistakes = () => {
  const mistakes = [
    {
      id: 1,
      title: "Overwatering",
      symptom: "Yellow leaves, root rot",
      fix: "Water only when topsoil is dry. Use pots with drainage holes.",
      icon: "💦",
      severity: "High"
    },
    {
      id: 2,
      title: "Insufficient Light",
      symptom: "Leggy growth, pale leaves",
      fix: "Move to brighter indirect light or use grow lights.",
      icon: "🔆",
      severity: "Medium"
    },
    {
      id: 3,
      title: "Ignoring Humidity",
      symptom: "Brown leaf tips, curling",
      fix: "Mist regularly or use a pebble tray.",
      icon: "🌫️",
      severity: "Low"
    }
  ];

  return (
    <div className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">
          Avoid These Common Plant Care Mistakes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mistakes.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-400">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-amber-600 font-medium mb-1">⚠️ Symptom: {item.symptom}</p>
              <p className="text-gray-700 mb-3"><span className="font-semibold">Fix:</span> {item.fix}</p>
              <span className={`px-2 py-1 text-xs rounded-full ${
                item.severity === "High" ? "bg-red-100 text-red-800" : 
                item.severity === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
              }`}>
                {item.severity} Risk
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonMistakes;