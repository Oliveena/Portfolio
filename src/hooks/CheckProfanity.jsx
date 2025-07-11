import { useState } from "react";

export default function CheckProfanity() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkText = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.openai.com/v1/moderations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({ input: text }),
      });

      const data = await response.json();
      return data.results[0].flagged;
    } catch (err) {
      console.error("Profanity check failed:", err);
      setError("Moderation API error.");
      return false; // fail open or fail closed depending on your policy
    } finally {
      setLoading(false);
    }
  };

  return { checkText, loading, error };
}
