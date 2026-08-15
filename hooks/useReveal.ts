"use client";
import { useEffect, useRef, useState } from "react";
export function useReveal(margin = "-60px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { setVisible(e.isIntersecting); },
      { rootMargin: margin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);
  return { ref, visible } as { ref: React.RefObject<HTMLElement>; visible: boolean };
}
