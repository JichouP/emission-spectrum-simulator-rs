import { atom } from 'recoil';

export type CsvData = { x: number; y: number }[];

const csvDataState = atom<CsvData>({
  key: 'csvDataState',
  default: [],
});

export default csvDataState;
