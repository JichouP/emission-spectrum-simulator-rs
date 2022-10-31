import { tauri } from '@tauri-apps/api';
import { CalcConfig } from '../atoms/calcConfigState';

const fetchCalculate = async (config: CalcConfig) => {
  return tauri
    .invoke<[number, number][]>('calculate', config)
    .then((v) => v.map(([x, y]) => ({ x: x * 1e9, y })));
};

export default fetchCalculate;
