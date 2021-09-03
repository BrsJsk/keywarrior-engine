import React, { useEffect } from 'react';

interface RowWordProps {
  word: string;
  userEnteredWord: string;
  removeWord?: (value: string) => void;
}
export const RowWord = ({
  word,
  userEnteredWord,
  removeWord,
}: RowWordProps) => {
  useEffect(() => {
    if (userEnteredWord.includes(word)) {
      removeWord?.(word);
    }
  }, [userEnteredWord, word]);
  return <p>{word}</p>;
};
