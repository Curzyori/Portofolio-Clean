"use client";

import React, { useState, useEffect, useRef } from "react";

const phrases = [
  "Building Digital Solutions 🚀",
  "Automating Everything I Can ⚙️",
  "Learning Never Stops 📚",
];

const TYPING_SPEED = 60;
const PAUSE_BETWEEN = 1500;
const ERASE_SPEED = 30;
const PAUSE_AFTER_ERASE = 500;

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const type = () => {
      if (!isTyping) {
        // Erasing
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          timeoutRef.current = setTimeout(type, ERASE_SPEED);
        } else {
          // Done erasing, move to next phrase
          setIsTyping(true);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          timeoutRef.current = setTimeout(type, PAUSE_AFTER_ERASE);
        }
      } else {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(type, TYPING_SPEED);
        } else {
          // Done typing, pause then start erasing
          timeoutRef.current = setTimeout(() => {
            setIsTyping(false);
          }, PAUSE_BETWEEN);
        }
      }
    };

    timeoutRef.current = setTimeout(type, TYPING_SPEED);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [phraseIndex, isTyping, displayText]);

  return (
    <div className="h-8 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 font-mono text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
      <span className="mr-2 text-blue-500">›</span>
      <span>{displayText}</span>
      <span className="ml-0.5 w-2 h-4 bg-blue-500 animate-pulse" />
    </div>
  );
}
