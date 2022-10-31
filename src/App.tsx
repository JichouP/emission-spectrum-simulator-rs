import Plot from './components/Plot';

function App() {
  return (
    <div className="w-full h-screen overflow-hidden p-8">
      <div className="flex w-full, h-full">
        <div className="w-96 min-w-[16rem]"></div>
        <div className="flex flex-1">
          <Plot
            config={{
              tR: 0.1,
              tV: 0.1,
              waveLengthStart: 200e-9,
              waveLengthRange: 12e-9,
              numberOfDivision: 400,
              fwhm: 1e-9,
            }}
            referenceData={[]}
          ></Plot>
        </div>
      </div>
    </div>
  );
}

export default App;
