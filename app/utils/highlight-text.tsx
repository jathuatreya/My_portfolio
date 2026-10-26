import React from "react";

/**
 * Utility to highlight the key word (or last N words) of a heading with the primary theme color.
 */
export function highlightTitle(title: string, wordsCount: number = 1): React.ReactNode {
  if (!title) return null;
  const words = title.trim().split(" ");
  if (words.length <= 1) {
    return <span className="text-primary">{title}</span>;
  }
  const mainPart = words.slice(0, -wordsCount).join(" ");
  const highlightPart = words.slice(-wordsCount).join(" ");
  return (
    <>
      {mainPart} <span className="text-primary">{highlightPart}</span>
    </>
  );
}
