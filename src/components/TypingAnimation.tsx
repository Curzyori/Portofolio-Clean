"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const phrases = {
  en: [
    "Building Digital Solutions 🚀",
    "Automating Everything I Can ⚙️",
    "Learning Never Stops 📚",
  ],
  id: [
    "Membangun Solusi Digital 🚀",
    "Mengotomatiskan Semua yang Saya Bisa ⚙️",
    "Belajar Tidak Pernah Berhenti 📚",
  ]
};

const TYPING_SPEED = 60;
const PAUSE_BETWEEN = 1500;
const ERASE_SPEED = 30;
const PAUSE_AFTER_ERASE = 500;

interface TypingAnimationProps {
  lang: "en" | "id";
}

export default function TypingAnimation({ lang }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pausedRef = useRef(false);

  // Reset index and state if language switches mid-typing
  useEffect(() => {
    setPhraseIndex(0);
    setDisplayText("");
    setIsTyping(true);
  }, [lang]);

  // Pause animation when tab is hidden to save battery
  useEffect(() => {
    const handleVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const type = useCallback(() => {
    if (pausedRef.current) {
      timeoutRef.current = setTimeout(type, 200);
      return;
    }
    // ponytail: RAF not needed here since we use setTimeout-based typing intervals,
    // but we pause via document.hidden to avoid battery drain in background tabs.
    const currentPhrases = phrases[lang];
    const currentPhrase = currentPhrases[phraseIndex];

    if (!isTyping) {
      // Erasing
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        timeoutRef.current = setTimeout(type, ERASE_SPEED);
      } else {
        // Done erasing, move to next phrase
        setIsTyping(true);
        setPhraseIndex((prev) => (prev + 1) % currentPhrases.length);
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
  }, [phraseIndex, isTyping, displayText, lang]);

  useEffect(() => {
    timeoutRef.current = setTimeout(type, TYPING_SPEED);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [type]);

  return (
    <div className="h-8 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 font-mono text-xs sm:text-sm text-neutral-700 dark:text-neutral-300" aria-live="polite">
      <span className="mr-2 text-blue-500" aria-hidden="true">›</span>
      <span>{displayText}</span>
      <span className="ml-0.5 w-2 h-4 bg-blue-500 animate-pulse" aria-hidden="true" />
    </div>
  );
}
