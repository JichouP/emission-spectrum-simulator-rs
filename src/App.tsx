import Plot from './Plot';

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
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
      ;
    </div>
  );
}

export default App;
