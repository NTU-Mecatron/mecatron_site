export default function CompetitionsPage() {
  const competitions = [
    {
      id: 1,
      title: "ROBOSUB 2025",
      date: "AUGUST 2025 (UPCOMING)",
      description: "Presenting our latest AUV: Kevin!",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", // Placeholder for submarine/underwater vehicle
      status: "upcoming"
    },
    {
      id: 2,
      title: "SAUVC 2025",
      date: "MARCH 2025",
      description: "After our third-place win in 2024, Mecatron made a strong comeback and clinched 1st Place at SAUVC 2025.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop", // Placeholder for underwater competition
      status: "completed"
    },
    {
      id:3,
      title: "MATE ROV 2024",
      date: "MAY 2024",
      description: "Among 82 teams from 17 countries that qualified to compete in the 2024 MATE ROV World Championship, Mecatron was selected for a special award – the Guts and Glory award.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop", // Placeholder for underwater competition
      status: "completed" 
    },
    {
      id:4,
      title: "SAUVC 2024",
      date: "APRIL 2024",
      description: "Mecatron’s AUV had the third fastest qualification timing of 10.53 seconds among the 21 qualified teams, then we proceeded to clinch the 3rd Prize in the final round!",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop", // Placeholder for underwater competition
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Competitions</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
          These are the competitions that we are preparing or have participated in.
        </p>
      </div>
      
      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 pb-12">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

        {/* Competition Cards */}
        {competitions.map((competition, index) => (
          <div key={competition.id} className="relative mb-16">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-900 z-10"></div>

            {/* Card Container */}
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
                  {/* Date Badge */}
                  <div className="px-6 py-3 bg-gray-700">
                    <span className="text-sm font-medium text-gray-300">
                      {competition.date}
                    </span>
                  </div>

                  {/* Competition Image */}
                  <div className="relative h-48 bg-gray-700">
                    <img 
                      src={competition.image} 
                      alt={competition.title}
                      className="w-full h-full object-cover"
                    />
                    {competition.status === 'upcoming' && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {competition.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {competition.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 