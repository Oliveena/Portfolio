import { useState } from "react";

export default function useProfanityCheck() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const checkText = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiUrl}/moderate`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text }),
});

      if (!response.ok) {
        throw new Error("Moderation API failed");
      }

      const data = await response.json();
      console.log("OpenAI moderation result:", data);
return data.results[0].flagged;
    } catch (err) {
      console.error("Profanity check failed:", err);
      setError("Moderation API error.");
      return null;
    } finally {
      setLoading(false);
    }
  };


  return { checkText, loading, error };
}
