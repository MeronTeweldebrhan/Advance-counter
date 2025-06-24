import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageKey = "counterData";

function AdvanceCounter() {
  const [data, setData] = useLocalStorage(LocalStorageKey, {
    count: 0,
    countHistory: [0],
  });
  const [stepValue, setStepValue] = useState(1);

  const count = data.count;
  const countHistory = data.countHistory;

  const handleIncrement = () => {
    const newCount = count + stepValue;
    setData({ count: newCount, countHistory: [...countHistory, newCount] });
  };

  const handleDecrement = () => {
    const newCount = count - stepValue;
    setData({ count: newCount, countHistory: [...countHistory, newCount] });
  };

  const handleReset = () => {
    setData({ count: 0, countHistory: [0] });
  };

  const handleStepChange = (e) => {
    setStepValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <main className="text-center border p-4 rounded-lg bg-gray-900 shadow-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-2">Counter</h3>
        
        <div className="card mb-4">
          <h1 className="text-2xl mb-2">Current Count: {count}</h1>
          <div className="flex justify-center flex-wrap gap-2">
            <button
              className="bg-blue-500 text-white rounded px-4 py-2"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="bg-blue-500 text-white rounded px-4 py-2"
              onClick={handleDecrement}
            >
              Decrement
            </button>
            <button
              className="bg-red-500 text-white rounded px-4 py-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="mr-2">Step Value:</label>
          <input
            className="bg-gray-800 text-white rounded px-2 py-1"
            type="number"
            value={stepValue}
            onChange={handleStepChange}
          />
        </div>

        <div className="text-left">
          <h4 className="font-semibold">Count History:</h4>
          <hr className="my-2 border-gray-700" />
          <ul className="list-disc list-inside max-h-40 overflow-y-auto pr-2 text-sm text-gray-300">
            {countHistory.map((value, index) => (
              <li key={index} className="m-1">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default AdvanceCounter;
