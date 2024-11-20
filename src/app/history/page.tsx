export default function HistoryPage() {
  const sampleData = [
    { id: 1, item: "Apple", date: "2024-11-15", calories: 95 },
    { id: 2, item: "Pizza Slice", date: "2024-11-14", calories: 285 },
    { id: 3, item: "Banana", date: "2024-11-13", calories: 105 },
  ];

  return (
    <div>
      <p className="text-secondary-foreground mb-4">
        Below is the history of scanned items:
      </p>
      <table className="w-full border-collapse border border-gray-300 bg-white">
        <thead className="bg-primary text-primary-foreground">
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Item</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Calories</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data) => (
            <tr key={data.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{data.id}</td>
              <td className="border border-gray-300 px-4 py-2">{data.item}</td>
              <td className="border border-gray-300 px-4 py-2">{data.date}</td>
              <td className="border border-gray-300 px-4 py-2">{data.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
