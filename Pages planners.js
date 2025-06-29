export default function Planner() {
  const targets = [
    { coin: "XRP", targetPrice: 3.00, action: "Sell 20%" },
    { coin: "BTC", targetPrice: 100000, action: "Sell 10%" },
    { coin: "ETH", targetPrice: 6000, action: "Sell 15%" }
  ];
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Profit-Taking & Re-Entry Plan</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Coin</th>
            <th className="py-2 px-4 border">Target Price</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {targets.map((item) => (
            <tr key={item.coin}>
              <td className="py-2 px-4 border">{item.coin}</td>
              <td className="py-2 px-4 border">${item.targetPrice}</td>
              <td className="py-2 px-4 border">{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
