import { tauri } from '@tauri-apps/api';

type CalcConfigForm = {
  tR: number;
  tV: number;
  waveLengthStart: number;
  waveLengthRange: number;
  numberOfDivision: number;
  fwhm: number;
};
