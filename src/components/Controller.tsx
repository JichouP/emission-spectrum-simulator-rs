import { useRecoilState } from 'recoil';
import calcConfigState from '../atoms/calcConfigState';

const Controller = () => {
  const [config, setConfig] = useRecoilState(calcConfigState);

  return (
    <div>
      <span className="text-xl">Params</span>
      <div className="ml-4">
        <div className="mb-2">
          <div>
            <label htmlFor="param-tV">Tv (eV)</label>
          </div>
          <div className="flex items-end">
            <input
              id="param-tV"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.tV}
              onChange={(e) => {
                setConfig((v) => ({ ...v, tV: Number(e.target.value) }));
              }}
            ></input>
            <span className="mx-2">x10</span>
            <input
              id="param-tVExp"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.tVExp}
              onChange={(e) => {
                setConfig((v) => ({ ...v, tVExp: Number(e.target.value) }));
              }}
            ></input>
          </div>
        </div>
        <div className="mb-2">
          <div>
            <label htmlFor="param-tR">Tr (eV)</label>
          </div>
          <div className="flex items-end">
            <input
              id="param-tR"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.tR}
              onChange={(e) => {
                setConfig((v) => ({ ...v, tR: Number(e.target.value) }));
              }}
            ></input>
            <span className="mx-2">x10</span>
            <input
              id="param-tRExp"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.tRExp}
              onChange={(e) => {
                setConfig((v) => ({ ...v, tRExp: Number(e.target.value) }));
              }}
            ></input>
          </div>
        </div>
        <div className="mb-2">
          <div>
            <label htmlFor="param-waveLengthStart">WavelengthStart (m)</label>
          </div>
          <div className="flex items-end">
            <input
              type="number"
              id="param-waveLengthStart"
              className="form-input w-20 pr-0"
              defaultValue={config.waveLengthStart}
              onChange={(e) => {
                setConfig((v) => ({
                  ...v,
                  waveLengthStart: Number(e.target.value),
                }));
              }}
            ></input>
            <span className="mx-2">x10</span>
            <input
              id="param-waveLengthStartExp"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.waveLengthStartExp}
              onChange={(e) => {
                setConfig((v) => ({
                  ...v,
                  waveLengthStartExp: Number(e.target.value),
                }));
              }}
            ></input>
          </div>
        </div>
        <div className="mb-2">
          <div>
            <label htmlFor="param-waveLengthRange">WavelengthRange (m)</label>
          </div>
          <div className="flex items-end">
            <input
              type="number"
              id="param-waveLengthRange"
              className="form-input w-20 pr-0"
              defaultValue={config.waveLengthRange}
              onChange={(e) => {
                setConfig((v) => ({
                  ...v,
                  waveLengthRange: Number(e.target.value),
                }));
              }}
            ></input>
            <span className="mx-2">x10</span>
            <input
              id="param-waveLengthRangeExp"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.waveLengthRangeExp}
              onChange={(e) => {
                setConfig((v) => ({
                  ...v,
                  waveLengthRangeExp: Number(e.target.value),
                }));
              }}
            ></input>
          </div>
        </div>
        <div className="mb-2">
          <div>
            <label htmlFor="param-numberOfDivision">Number of division</label>
          </div>
          <div className="flex items-end">
            <input
              type="number"
              id="param-numberOfDivision"
              className="form-input w-20 pr-0"
              defaultValue={config.numberOfDivision}
              onChange={(e) => {
                setConfig((v) => ({
                  ...v,
                  numberOfDivision: Number(e.target.value),
                }));
              }}
            ></input>
            <span className="mx-2">x10</span>
            <input
              id="param-numberOfDivisionExp"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.numberOfDivisionExp}
              onChange={(e) => {
                setConfig((v) => ({
                  ...v,
                  numberOfDivisionExp: Number(e.target.value),
                }));
              }}
            ></input>
          </div>
        </div>
        <div className="mb-2">
          <div>
            <label htmlFor="param-fwhm">FWHM (m)</label>
          </div>
          <div className="flex items-end">
            <input
              type="number"
              id="param-fwhm"
              className="form-input w-20 pr-0"
              defaultValue={config.fwhm}
              onChange={(e) => {
                setConfig((v) => ({ ...v, fwhm: Number(e.target.value) }));
              }}
            ></input>
            <span className="mx-2">x10</span>
            <input
              id="param-fwhmExp"
              type="number"
              className="form-input w-20 pr-0"
              defaultValue={config.fwhmExp}
              onChange={(e) => {
                setConfig((v) => ({ ...v, fwhmExp: Number(e.target.value) }));
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controller;
