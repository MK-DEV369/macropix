export default function AboutPage() {
  const teamMembers = [
    {
      name: "L Moryakantha",
      usn: "RVCE24BAI401",
      branch: "AI",
    },
    {
      name: "Nihal Soni",
      usn: "1RV23CS152",
      branch: "CS",
    },
    {
      name: "Nikhil Parashuram Bakale",
      usn: "1RV23CS154",
      branch: "CS",
    },
    {
      name: "Srikanth R",
      usn: "1RV23IS120",
      branch: "IS",
    },
    {
      name: "Yogendra Ajay Reddy Mareddy",
      usn: "1RV23IS143",
      branch: "IS",
    },
  ];

  return (
    <div>
      <p className="text-secondary-foreground mb-4">
        Meet our team of dedicated developers and problem-solvers!
      </p>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">USN</th>
              <th className="border border-gray-300 px-4 py-2">Branch</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                <td className="border border-gray-300 px-4 py-2">{member.usn}</td>
                <td className="border border-gray-300 px-4 py-2">{member.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
