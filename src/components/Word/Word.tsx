import React, {
  createRef,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from 'react';

interface WordProps {
  word: string;
  userEnteredWord: string;
}

export const Word = ({ word, userEnteredWord }: WordProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const textElement = createRef<HTMLParagraphElement>();

  useEffect(() => {
    textElement?.current?.addEventListener('animationend', () => {
      setIsVisible(false);
    });
  }, []);

  useEffect(() => {
    if (userEnteredWord.includes(word)) {
      setIsVisible(false);
    }
  }, [userEnteredWord, word]);

  if (isVisible) {
    return <p ref={textElement}>{word}</p>;
  }

  return null;
};
