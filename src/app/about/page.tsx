import React from 'react';

const team = [
  { name: 'Morya', role: 'Project Manager', description: 'Leads the team and ensures project delivery on time.' },
  { name: 'Ajay', role: 'Frontend Developer', description: 'Specializes in building user interfaces and optimizing performance.' },
  { name: 'Srikanth', role: 'Backend Developer', description: 'Handles server-side logic and database management.' },
  { name: 'Nikhil', role: 'UI/UX Designer', description: 'Creates intuitive and visually appealing designs.' },
  { name: 'Nihal', role: 'DevOps Engineer', description: 'Maintains infrastructure and deployment pipelines.' },
];

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6 text-muted-foreground">
        We are a passionate team dedicated to delivering exceptional software solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="rounded-lg border p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-muted-foreground">{member.role}</p>
            <p className="mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
