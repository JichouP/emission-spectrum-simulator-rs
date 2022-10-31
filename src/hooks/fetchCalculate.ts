import { tauri } from '@tauri-apps/api';

type CalcConfigForm = {
  tR: number;
  tV: number;
  waveLengthStart: number;
  waveLengthRange: number;
  numberOfDivision: number;
  fwhm: number;
};

const fetchCalculate = async (config: CalcConfigForm) => {
  return tauri
    .invoke<[number, number][]>('calculate', config)
    .then((v) => v.map(([x, y]) => ({ x: x * 1e9, y })));
};

export default fetchCalculate;
