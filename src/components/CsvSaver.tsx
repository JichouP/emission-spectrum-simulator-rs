import { open } from '@tauri-apps/api/dialog';

const CsvSaver = () => {
  return (
    <div className="mt-4">
      <div className="mb-2">
        <span className="text-xl">Save to CSV</span>
      </div>
      <div className="ml-4">
        <button
          className="border p-2 border-slate-600 shadow-md rounded-lg"
          onClick={() => {
            open({
              multiple: false,
              directory: true,
            }).then((v) => {
              v;
            });
          }}
        >
          Save to CSV File
        </button>
        <div className="mt-2">{}</div>
      </div>
    </div>
  );
};

export default CsvSaver;
