import { tauri } from '@tauri-apps/api';

const loadCsv = async (path: string) => {
  return tauri
    .invoke<[number, number][]>('read_csv', { path })
    .then((v) => v.map(([x, y]) => ({ x: x, y })));
};

export default loadCsv;
