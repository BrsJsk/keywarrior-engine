import React, { useEffect, useState } from 'react';
import { getRandomWord } from '../../utils/words';
import { interval } from 'rxjs';
import { Word } from '../Word';

const INTERVAL = 2000;

interface RowProps {
  userEnteredWord: string;
}

export const Row = ({ userEnteredWord }: RowProps) => {
  const [generatedWords, setWords] = useState<string[]>([]);

  useEffect(() => {
    const subs = interval(INTERVAL).subscribe(() => {
      const word = getRandomWord();

      setWords((prevState) => [...prevState, word]);
    });

    return () => {
      subs.unsubscribe();
    };
  }, []);

  return (
    <>
      {generatedWords?.map((word, index) => (
        <Word word={word} key={index} userEnteredWord={userEnteredWord} />
      ))}
    </>
  );
};
