import { FC, useEffect, useState } from 'react';
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts';
import fetchCalculate from '../cmd/fetchCalculate';
import { useRecoilState } from 'recoil';
import calcConfigState from '../atoms/calcConfigState';
import csvDataState, { CsvData } from '../atoms/csvDataState';

const Plot: FC = () => {
  const [config] = useRecoilState(calcConfigState);
  const [csvData] = useRecoilState(csvDataState);

  const [data, setData] = useState<CsvData>([]);

  useEffect(() => {
    const newConfig = {
      tR: config.tR * Math.pow(10, config.tRExp),
      tV: config.tV * Math.pow(10, config.tVExp),
      waveLengthStart:
        config.waveLengthStart * Math.pow(10, config.waveLengthStartExp),
      waveLengthRange:
        config.waveLengthRange * Math.pow(10, config.waveLengthRangeExp),
      numberOfDivision:
        config.numberOfDivision * Math.pow(10, config.numberOfDivisionExp),
      fwhm: config.fwhm * Math.pow(10, config.fwhmExp),
    };
    fetchCalculate(newConfig).then(setData);
  }, [config]);

  return (
    <ResponsiveContainer>
      <ScatterChart>
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="x"
          name="Wavelength"
          unit="nm"
          domain={[
            (dataMin: number) => Math.round(dataMin),
            (dataMax: number) => Math.round(dataMax),
          ]}
        />
        <YAxis type="number" dataKey="y" domain={[0, 1]} />
        <ZAxis range={[10]}></ZAxis>
        <Tooltip cursor={{ strokeDasharray: '3 3' }}></Tooltip>
        <Scatter
          name="Result"
          data={data}
          fill="#8884d8"
          isAnimationActive={false}
          line
        />
        <Scatter
          name="Experiment"
          data={csvData}
          fill="#d88a84"
          isAnimationActive={false}
          line
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default Plot;
