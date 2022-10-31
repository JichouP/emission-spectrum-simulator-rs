import { tauri } from '@tauri-apps/api';

export type CalcConfig = {
  tR: number;
  tV: number;
  waveLengthStart: number;
  waveLengthRange: number;
  resolution: number;
  fwhm: number;
};

const fetchCalculate = async ({
  tR,
  tV,
  waveLengthStart,
  waveLengthRange,
  resolution,
  fwhm,
}: CalcConfig) => {
  return tauri
    .invoke<[number, number][]>('calculate', {
      tR,
      tV,
      waveLengthStart,
      waveLengthRange,
      resolution,
      fwhm,
    })
    .then((v) => v.map(([x, y]) => ({ x: x * 1e9, y })));
};

export default fetchCalculate;
