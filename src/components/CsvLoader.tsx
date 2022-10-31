import { open } from '@tauri-apps/api/dialog';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import csvDataState from '../atoms/csvDataState';
import csvPathState from '../atoms/csvPathState';
import loadCsv from '../cmd/loadCsv';

const CsvLoader = () => {
  const [csvPath, setCsvPath] = useRecoilState(csvPathState);
  const [, setCsvData] = useRecoilState(csvDataState);
  useEffect(() => {
    if (csvPath) {
      loadCsv(csvPath).then((v) => {
        setCsvData(v);
      });
    }
  }, [csvPath]);

  return (
    <div className="mt-4">
      <div className="mb-2">
        <span className="text-xl">Load CSV</span>
      </div>
      <div className="ml-4">
        <button
          className="border p-2 border-slate-600 shadow-md rounded-lg"
          onClick={() => {
            open({
              filters: [{ extensions: ['csv'], name: 'csv' }],
              multiple: false,
            }).then((v) => {
              if (typeof v === 'string') setCsvPath(v);
            });
          }}
        >
          Open CSV File
        </button>
        <div className="mt-2">{csvPath}</div>
      </div>
    </div>
  );
};

export default CsvLoader;
