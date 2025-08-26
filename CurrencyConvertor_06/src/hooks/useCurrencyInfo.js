import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Correct API endpoint. Example format: https://api.fastforex.io/fetch-all?from={currency}&api_key={API_KEY}
    const API_KEY = "1eb042c3ef-4456ed6ade-t1iq3w"
    fetch(
      `https://api.fastforex.io/fetch-all?from=${currency}&api_key=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        // Check what your API returns and set relevant data
        setData(res.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setData({});
      });
  }, [currency]);

  // Use useEffect for logging if needed
  useEffect(() => {
    console.log("Currency data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;

// 1eb042c3ef-4456ed6ade-t1iq3w
