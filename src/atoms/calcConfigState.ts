import { atom } from 'recoil';

export type CalcConfig = {
  tR: number;
  tRExp: number;
  tV: number;
  tVExp: number;
  waveLengthStart: number;
  waveLengthStartExp: number;
  waveLengthRange: number;
  waveLengthRangeExp: number;
  numberOfDivision: number;
  numberOfDivisionExp: number;
  fwhm: number;
  fwhmExp: number;
  offset: number;
  offsetExp: number;
};

const calcConfigState = atom<CalcConfig>({
  key: 'plotConfig',
  default: {
    tR: 10,
    tRExp: -2,
    tV: 20,
    tVExp: -2,
    waveLengthStart: 200,
    waveLengthStartExp: -9,
    waveLengthRange: 12,
    waveLengthRangeExp: -9,
    numberOfDivision: 4,
    numberOfDivisionExp: 2,
    fwhm: 8,
    fwhmExp: -10,
    offset: 0,
    offsetExp: -2,
  },
});

export default calcConfigState;
