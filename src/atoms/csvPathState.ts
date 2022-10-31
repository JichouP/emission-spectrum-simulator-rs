import { atom } from 'recoil';

const csvPathState = atom({
  key: 'csvPathState',
  default: '',
});

export default csvPathState;
