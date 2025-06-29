import Link from 'next/link';

const portfolio = [
  { coin: "XRP", holdings: 3957, avgPrice: 2.21, currentPrice: 0.48 },
  { coin: "BTC", holdings: 0.01609, avgPrice: 83833.14, currentPrice: 62000 },
  { coin: "ETH", holdings: 0.31442, avgPrice: 2367.47, currentPrice: 3500 },
  { coin: "ADA", holdings: 420, avgPrice: 0.75, currentPrice: 0.45 },
  { coin: "SOL", holdings: 1.092, avgPrice: 137.50, currentPrice: 150 },
  { coin: "ONDO", holdings: 165.297, avgPrice: 0.85, currentPrice: 0.95 },
  { coin: "PEPE", holdings: 4761905, avgPrice: 0.0000012, currentPrice: 0.0000015 }
];

export default function Home() {
  const totalValue = portfolio.reduce((sum, item) => sum + (item.holdings * item.currentPrice), 0);
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Crypto Portfolio Overview</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Coin</th>
            <th className="py-2 px-4 border">Holdings</th>
            <th className="py-2 px-4 border">Avg Buy Price</th>
            <th className="py-2 px-4 border">Current Price</th>
            <th className="py-2 px-4 border">Value</th>
            <th className="py-2 px-4 border">P/L</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((item) => {
            const value = item.holdings * item.currentPrice;
            const pl = value - (item.holdings * item.avgPrice);
            return (
              <tr key={item.coin}>
                <td className="py-2 px-4 border">{item.coin}</td>
                <td className="py-2 px-4 border">{item.holdings}</td>
                <td className="py-2 px-4 border">${item.avgPrice.toFixed(4)}</td>
                <td className="py-2 px-4 border">${item.currentPrice.toFixed(4)}</td>
                <td className="py-2 px-4 border">${value.toFixed(2)}</td>
                <td className={`py-2 px-4 border ${pl >= 0 ? "text-green-600" : "text-red-600"}`}>
                  ${pl.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-lg font-semibold">Total Value: ${totalValue.toFixed(2)}</p>
      </div>
      <div className="mt-4 space-x-4">
        <Link href="/charts/XRP"><a className="text-blue-500">View Charts</a></Link>
        <Link href="/planner"><a className="text-blue-500">Profit/Re-entry Planner</a></Link>
        <Link href="/analysts"><a className="text-blue-500">Analyst Insights</a></Link>
      </div>
    </div>
  );
}
