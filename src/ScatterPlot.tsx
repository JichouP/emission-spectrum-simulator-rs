import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const dataSet = d3.range(10).map((elem) => ({ x: elem * 10, y: elem * 10 }));
console.log(dataSet);
const ScatterPlot = () => {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    d3.select(svg.current)
      .selectAll('circle') //<-バインドするためにこれから追加するDOMのセレクタを取得
      .data(dataSet) //<-バインド。これ以降のメソッドはバインドされたオブジェクトを受け取れる
      .enter() //<-selectAllで取得したDOMに対してデータが追加されている場合、このメソッドで検知する。詳しくは後述
      .append('circle') //<-circleオブジェクトをappend
      .attr('cx', (d) => d.x) //<- 配列のxをそのままx座標へ
      .attr('cy', (d) => d.y) //<- 配列のyをそのままy座標へ
      .attr('r', 1);
  });

  return (
    <div>
      <svg ref={svg} id="plot" width={500} height={200}></svg>
    </div>
  );
};

export default ScatterPlot;
