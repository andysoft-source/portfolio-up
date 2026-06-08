import { useState, useCallback, useRef } from 'react';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';

export function useGroqChat(systemPrompt) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const conversationRef = useRef([]);
  const isLoadingRef = useRef(false);

  const sendMessage = useCallback(async (content) => {
    if (isLoadingRef.current) return;

    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    if (!apiKey) {
      setError('GROQ API key is not configured. Add VITE_GROQ_API_KEY to your .env file.');
      return;
    }

    const userMessage = { role: 'user', content };
    conversationRef.current = [...conversationRef.current, userMessage];
    setMessages([...conversationRef.current]);
    setIsLoading(true);
    isLoadingRef.current = true;
    setError(null);

    try {
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversationRef.current,
          ],
        }),
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => 'Unknown error');
        throw new Error(`API error ${response.status}: ${errText}`);
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
      };
      conversationRef.current = [...conversationRef.current, assistantMessage];
      setMessages([...conversationRef.current]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      isLoadingRef.current = false;
    }
  }, [systemPrompt]);

  const clearMessages = useCallback(() => {
    conversationRef.current = [];
    isLoadingRef.current = false;
    setMessages([]);
    setIsLoading(false);
    setError(null);
  }, []);

  return { messages, sendMessage, isLoading, error, clearMessages };
}
