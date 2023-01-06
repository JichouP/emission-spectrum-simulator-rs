import { FC, useEffect, useState } from 'react';
import fetchCalculate from '../cmd/fetchCalculate';
import { useRecoilState } from 'recoil';
import calcConfigState from '../atoms/calcConfigState';
import csvDataState, { CsvData } from '../atoms/csvDataState';
import UplotReact from 'uplot-react';
import uPlot from 'uplot';
import 'uplot/dist/uPlot.min.css';

const options: uPlot.Options = {
  title: 'Chart',
  width: Math.round(window.innerWidth * 0.8),
  height: Math.round(window.innerHeight * 0.8),
  series: [
    {
      label: 'wave length',
    },
    {
      label: 'Theoretical value',
      stroke: 'blue',
      width: 1,
      spanGaps: true,
    },
    {
      label: 'Experimental value',
      stroke: 'red',
      width: 1,
      spanGaps: true,
    },
  ],
  scales: {
    x: {
      time: false,
    },
  },
};

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
    fetchCalculate(newConfig).then(v => {
      // return v; // Δv=0,1
      // return v.filter(v => v.x < 206); // Δv=0
      const filterd = v.filter(v => v.x > 206); // Δv=1
      const max = Math.max(...filterd.map(v => v.y));
      return filterd.map(({ x, y }) => ({ x, y: y / max }))
    }).then((v) => {
      setData(
        v.map(({ x, y }) => ({
          x: x + config.offset * Math.pow(10, config.offsetExp),
          y,
        }))
      );
    });
  }, [config]);

  return (
    <UplotReact options={options} data={createData(data, csvData)}></UplotReact>
  );
};

const createData = (
  ...dataList: { x: number; y: number }[][]
): [number[], (number | null)[], (number | null)[]] => {
  const xList = dataList.flatMap((v) => v.map(({ x }) => x));
  const xListUniqSorted = [...new Set(xList)].sort();

  const yList: (number | null)[][] = dataList.map((data) => {
    return xListUniqSorted.map((x) => {
      const index = data.findIndex((v) => v.x === x);
      if (index === -1) {
        return null;
      } else {
        return data[index].y;
      }
    });
  });

  return [xListUniqSorted, yList[0], yList[1]];
};

export default Plot;
