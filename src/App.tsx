import React from 'react';
import logo from './logo.svg';
import './App.css';

import { IgrGridModule, IgrGrid, IgrColumn } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import {
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartInteractivityModule,
  IgrDataChartVerticalCategoryModule,
  IgrDataChartAnnotationModule,
  IgrDataChart,
  IgrCategoryYAxis,
  IgrNumericXAxis,
  IgrBarSeries } from "igniteui-react-charts";
  import { SampleDataService } from './SampleDataService';

const mods: any[] = [
  IgrGridModule,
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartInteractivityModule,
  IgrDataChartVerticalCategoryModule,
  IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

function App() {

  const data = SampleDataService.generateData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{ width: "80%" }}>
          <IgrGrid
            autoGenerate="false"
            primaryKey="id"
            data={data}>
              <IgrColumn field="id" header="ID" dataType="Number" />
              <IgrColumn field="name" header="Name" dataType="String" />
              <IgrColumn field="team" header="Team" dataType="String" />
              <IgrColumn field="score" header="Score" dataType="Number" />
              <IgrColumn field="created" header="Created" dataType="Date" />
          </IgrGrid>

          <div style={{height: "600px", width: "100%", padding: "1em", marginTop: "1em", marginBottom: "1em", boxSizing: "border-box", background: "white" }}>
            {/* データチャート */}
            <IgrDataChart
              dataSource={data}
              width="100%"
              height="100%">
              {/* 軸 */}
              <IgrCategoryYAxis
                name="yAxis"
                label="name"
                useEnhancedIntervalManagement="true"
                enhancedIntervalPreferMoreCategoryLabels="true"/>
              <IgrNumericXAxis name="xAxis" minimumValue={0} />
              {/* シリーズ */}
              <IgrBarSeries
                  name="series1"
                  xAxisName="xAxis"
                  yAxisName="yAxis"
                  valueMemberPath="score" />
            </IgrDataChart>
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
