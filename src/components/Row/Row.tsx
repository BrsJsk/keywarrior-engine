import React, { useEffect, useState } from 'react';
import { getRandomWord } from '../../utils/words';
import { interval } from 'rxjs';
import { RowWord } from './RowWordProps';

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

  const removeWord = (word: string) => {
    setWords((prevValue) => [...prevValue.filter((w) => w !== word)]);
  };

  return (
    <>
      {generatedWords?.map((word, index) => (
        <RowWord
          word={word}
          key={index}
          userEnteredWord={userEnteredWord}
          removeWord={removeWord}
        />
      ))}
    </>
  );
};
