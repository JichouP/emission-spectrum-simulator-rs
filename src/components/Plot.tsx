import { FC, useEffect, useState } from 'react';
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts';
import fetchCalculate from '../hooks/fetchCalculate';
import { useRecoilState } from 'recoil';
import calcConfigState from '../atoms/calcConfigState';

type Props = {
  referenceData: Awaited<ReturnType<typeof fetchCalculate>>;
};

const Plot: FC<Props> = () => {
  const [config] = useRecoilState(calcConfigState);

  const [data, setData] = useState<Awaited<ReturnType<typeof fetchCalculate>>>(
    []
  );

  useEffect(() => {
    fetchCalculate(config).then(setData);
  }, []);

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
        <Scatter
          name="Result"
          data={data}
          fill="#8884d8"
          isAnimationActive={false}
          line
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default Plot;
