import { useState, useCallback, useRef, useEffect } from "react";
import { copyToClipboard } from "../utils/clipboard";

/**
 * Custom hook for managing clipboard interactions with timed UI feedback.
 * 
 * @param {number} resetDurationMs Duration in ms before the feedback state resets
 */
export function useCopyFeedback(resetDurationMs = 2000) {
  const [copiedKey, setCopiedKey] = useState(null);
  const timeoutRef = useRef(null);

  // Clear timeout on unmount to prevent memory leaks / state updates on unmounted components
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copy = useCallback(
    async (key, text) => {
      if (!text) return false;
      const success = await copyToClipboard(text);
      if (success) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setCopiedKey(key);
        timeoutRef.current = setTimeout(() => {
          setCopiedKey(null);
          timeoutRef.current = null;
        }, resetDurationMs);
        return true;
      }
      return false;
    },
    [resetDurationMs]
  );

  const isCopied = useCallback(
    (key) => copiedKey === key,
    [copiedKey]
  );

  return { copy, isCopied, copiedKey };
}
