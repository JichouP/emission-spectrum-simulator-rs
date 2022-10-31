import { atom } from 'recoil';

export type CalcConfig = {
  tR: number;
  tV: number;
  waveLengthStart: number;
  waveLengthRange: number;
  numberOfDivision: number;
  fwhm: number;
};

const calcConfigState = atom<CalcConfig>({
  key: 'plotConfig',
  default: {
    tR: 0.1,
    tV: 0.1,
    waveLengthStart: 200e-9,
    waveLengthRange: 12e-9,
    numberOfDivision: 400,
    fwhm: 1e-9,
  },
});

export default calcConfigState;
