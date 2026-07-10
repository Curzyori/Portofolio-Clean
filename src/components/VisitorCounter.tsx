"use client";

import { useEffect, useRef, useState } from "react";

const WORKSPACE = "curzy-antigravitys-team-4710";
const COUNTER = "first-counter-4710";
const API = `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER}`;

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    const token = process.env.NEXT_PUBLIC_COUNTER_TOKEN;
    if (token) headers["Authorization"] = `Bearer ${token}`;

    fetch(`${API}/up`, { headers })
      .then((r) => r.json() as Promise<{ data: { up_count: number } }>)
      .then((res) => setCount(res.data.up_count))
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
