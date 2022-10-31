import { tauri } from '@tauri-apps/api';

export type CalcConfig = {
  tR: number;
  tV: number;
  waveLengthStart: number;
  waveLengthRange: number;
  numberOfDivision: number;
  fwhm: number;
};

const fetchCalculate = async ({
  tR,
  tV,
  waveLengthStart,
  waveLengthRange,
  numberOfDivision,
  fwhm,
}: CalcConfig) => {
  return tauri
    .invoke<[number, number][]>('calculate', {
      tR,
      tV,
      waveLengthStart,
      waveLengthRange,
      numberOfDivision,
      fwhm,
    })
    .then((v) => v.map(([x, y]) => ({ x: x * 1e9, y })));
};

export default fetchCalculate;
