import { SimpleCoinData } from "@/lib/types";

const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY || "";

async function fetchCoinData(): Promise<SimpleCoinData[]> {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&ids=bitcoin%2Cethereum%2Cripple`;

  try {
    const response = await fetch(url, {
      headers: {
        'x-cg-demo-api-key': COINGECKO_API_KEY,
      },
      next: {
        revalidate: 60,
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorData.error || 'Unknown error'}`);
    }

    const data: SimpleCoinData[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch coin data:", error);
    throw new Error("코인 데이터를 불러오는 데 실패했습니다.");
  }
}

export default async function Page() {
  let coins: SimpleCoinData[] = [];
  let error: string | null = null;

  try {
    coins = await fetchCoinData();
  } catch (err) {
    error = err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">코인 랭킹 보드 (KRW)</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      {!error && coins.length === 0 && (
        <p>데이터가 없습니다.</p>
      )}
      {!error && coins.length > 0 && (
        <ul className="space-y-2">
          {coins.map((coin) => (
            <li key={coin.id} className="flex justify-between items-center p-3 border rounded-md">
              <span className="font-medium text-lg">{coin.name} ({coin.symbol.toUpperCase()})</span>
              <span className="text-xl font-semibold">{coin.current_price.toLocaleString('ko-KR')} KRW</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
