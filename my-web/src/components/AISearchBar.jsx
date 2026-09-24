import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TextInput, Button } from "@carbon/react";
import { SendAlt } from "@carbon/icons-react";
import "./AISearchBar.scss";

const QUERY = "I want an API to keep track of orders";
const TYPE_SPEED = 45;
const HOLD_MS = 1800;
const CURSOR_BLINK_MS = 500;

/* A real Carbon TextInput + Button (icon-only) composition, looping a
   typing animation of a sample query once it scrolls into view — stands
   in for the proposed AI-powered search concept. */
export default function AISearchBar() {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    let timeoutId;

    const loop = () => {
      let i = 0;
      setIsTyping(true);
      const typeInterval = setInterval(() => {
        i += 1;
        setTyped(QUERY.slice(0, i));
        if (i >= QUERY.length) {
          clearInterval(typeInterval);
          setIsTyping(false);
          timeoutId = setTimeout(() => {
            setTyped("");
            timeoutId = setTimeout(loop, 500);
          }, HOLD_MS);
        }
      }, TYPE_SPEED);
      return () => clearInterval(typeInterval);
    };

    const cleanupType = loop();
    return () => {
      cleanupType?.();
      clearTimeout(timeoutId);
    };
  }, [visible]);

  useEffect(() => {
    const interval = setInterval(() => setCursorOn((on) => !on), CURSOR_BLINK_MS);
    return () => clearInterval(interval);
  }, []);

  // Programmatic value changes don't auto-scroll an unfocused input, so
  // the tail end of the sentence would otherwise stay clipped off-screen.
  // useLayoutEffect (not useEffect) applies the scroll before the browser
  // paints, so there's no one-frame flash of unscrolled text as it grows.
  useLayoutEffect(() => {
    if (inputRef.current) inputRef.current.scrollLeft = inputRef.current.scrollWidth;
  }, [typed, cursorOn]);

  return (
    <div
      ref={ref}
      className="ai-search-bar max-w-sm flex items-center gap-2 rounded-lg border border-gray-200 border-b-2 border-b-[#0F62FE] bg-white p-2 pointer-events-none select-none"
    >
      <div className="flex-1">
        <TextInput
          ref={inputRef}
          id="ai-search-demo"
          labelText="Search"
          hideLabel
          placeholder="Type something..."
          value={`${typed}${isTyping || cursorOn ? "|" : ""}`}
          readOnly
          size="md"
          tabIndex={-1}
        />
      </div>
      <Button
        kind="ghost"
        size="md"
        hasIconOnly
        iconDescription="Send"
        renderIcon={SendAlt}
        tooltipPosition="bottom"
        disabled={!typed}
        tabIndex={-1}
      />
    </div>
  );
}
