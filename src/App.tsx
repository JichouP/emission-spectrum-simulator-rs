import Controller from './components/Controller';
import Plot from './components/Plot';

function App() {
  return (
    <div className="w-full h-screen overflow-hidden p-8">
      <div className="flex w-full, h-full">
        <div className="w-96 min-w-[16rem]">
          <Controller></Controller>
        </div>
        <div className="flex flex-1">
          <Plot referenceData={[]}></Plot>
        </div>
      </div>
    </div>
  );
}

export default App;
