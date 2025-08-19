import { useState, useEffect } from "react";

export default function Typewriter({
  words,
  speed = 150, // typing speed
  pause = 1000, // pause when full word is shown
}) {
  const [wordIdx, setWordIdx] = useState(0); // which word in array
  const [charIdx, setCharIdx] = useState(0); // char position inside word
  const [reverse, setReverse] = useState(false); // false = typing, true = deleting

  useEffect(() => {
    const currentWord = words[wordIdx];

    /* --- decide what to do next --------------------------------------- */
    if (!reverse && charIdx === currentWord.length) {
      // word finished → wait, then start deleting
      const id = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(id);
    }

    if (reverse && charIdx === 0) {
      // word deleted → move to next word & start typing
      setReverse(false);
      setWordIdx((wordIdx + 1) % words.length);
      return;
    }

    /* --- keep typing or deleting -------------------------------------- */
    const id = setTimeout(
      () => setCharIdx(charIdx + (reverse ? -1 : 1)),
      reverse ? speed / 3 : speed // deleting is faster
    );

    return () => clearTimeout(id);
  }, [charIdx, reverse, wordIdx, words, speed, pause]);

  return <span>{words[wordIdx].slice(0, charIdx)}</span>;
}
