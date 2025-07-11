import { useState } from "react";

export default function useProfanityCheck() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkText = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/moderate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Moderation API failed");
      }

      const data = await response.json();
      return data.results[0].flagged;
    } catch (err) {
      console.error("Profanity check failed:", err);
      setError("Moderation API error.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { checkText, loading, error };
}
