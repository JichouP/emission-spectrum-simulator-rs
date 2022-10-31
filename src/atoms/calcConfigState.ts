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
};

const calcConfigState = atom<CalcConfig>({
  key: 'plotConfig',
  default: {
    tR: 1,
    tRExp: -1,
    tV: 1,
    tVExp: -1,
    waveLengthStart: 200,
    waveLengthStartExp: -9,
    waveLengthRange: 12,
    waveLengthRangeExp: -9,
    numberOfDivision: 4,
    numberOfDivisionExp: 2,
    fwhm: 1,
    fwhmExp: -9,
  },
});

export default calcConfigState;
