import { FC, useEffect, useState } from 'react';
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from 'recharts';
import fetchCalculate, { CalcConfig } from './hooks/fetchCalculate';

type Props = {
  config: CalcConfig;
  referenceData: Awaited<ReturnType<typeof fetchCalculate>>;
};

const Plot: FC<Props> = ({ config }) => {
  const [data, setData] = useState<Awaited<ReturnType<typeof fetchCalculate>>>(
    []
  );

  useEffect(() => {
    fetchCalculate(config).then(setData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <YAxis type="number" dataKey="y" />
        <Scatter
          name="Result"
          data={data}
          fill="#8884d8"
          isAnimationActive={false}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default Plot;
