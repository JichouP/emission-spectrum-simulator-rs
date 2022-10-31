import Controller from './components/Controller';
import CsvLoader from './components/CsvLoader';
import Plot from './components/Plot';

function App() {
  return (
    <div className="w-full h-screen overflow-hidden p-8 select-none">
      <div className="flex w-full, h-full">
        <div className="w-96 min-w-[16rem]">
          <Controller></Controller>
          <CsvLoader></CsvLoader>
        </div>
        <div className="flex flex-1">
          <Plot></Plot>
        </div>
      </div>
    </div>
  );
}

export default App;
