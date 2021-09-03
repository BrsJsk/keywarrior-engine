import React, { useEffect } from 'react';
import { useState } from 'react';
import { keyboardPress } from '../../utils/keyboard';
import { Row } from '../Row';

interface CanvasRow {
  height: number;
  id: number;
}

const generateEmptyArray = (value: number) => {
  return Array.from(Array(value).keys());
};

const getCanvasRowHeight = (rowsLenght: number): number => {
  const { innerHeight } = window;
  return innerHeight / rowsLenght - 10;
};

export const Canvas = () => {
  const [rows, setRows] = useState<CanvasRow[]>([]);
  const ROWS_NUMBER = 8;
  const [keyboardPresses, setKeyboardPresses] = useState('');

  const generateRows = () => {
    const rowItems: CanvasRow[] = generateEmptyArray(ROWS_NUMBER).map(
      (_, index) => {
        return { height: getCanvasRowHeight(ROWS_NUMBER), id: index };
      }
    );

    setRows(rowItems);
  };

  useEffect(() => {
    generateRows();
  }, []);

  useEffect(() => {
    const sub = keyboardPress.subscribe((value) => {
      setKeyboardPresses((prevValue) => `${prevValue}${value}`);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <>
      {rows?.map((row) => (
        <div
          key={row.id}
          className="canvas-row"
          id={`canvas-row-${row.id}`}
          style={{ marginTop: row.height }}
        >
          <Row userEnteredWord={keyboardPresses} />
        </div>
      ))}
    </>
  );
};
