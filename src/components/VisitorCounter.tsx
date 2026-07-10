"use client";

import { useEffect, useRef, useState } from "react";

const WORKSPACE = "curzy-antigravitys-team-4710";
const COUNTER = "first-counter-4710";
const BASE = `https://api.counterapi.dev/v1/${WORKSPACE}/${COUNTER}`;

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    fetch(`${BASE}/up`)
      .then((r) => r.json() as Promise<{ count: number }>)
      .then((res) => setCount(res.count))
      .catch(() => setCount(0));
  }, []);

  if (count === null) return null;

  return (
    <span
      className="font-mono text-xs text-neutral-500 dark:text-neutral-400"
      title={`${count.toLocaleString()} total visitors`}
    >
      {count.toLocaleString()} visitors
    </span>
  );
}
