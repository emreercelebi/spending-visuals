import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import { getSpendingData } from './sheets';
import { Table } from './components/Table';
import { MonthSelect } from './components/MonthSelect';
import { MONTHS } from './common/constants';
import { CategoryCharts } from './components/CategoryCharts';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      getSpendingData().then(res => setData(res))
    }
  }, [data]);
  const [currentMonth, setCurrentMonth] = useState(MONTHS[new Date().getMonth()]);
  const [chartMode, setChartMode] = useState(false);
  const months = MONTHS.filter(month => data && data[month]);

  return (
    <div className="App">
      <div className="App-container">
        {data && <MonthSelect months={months} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />}
        {data && <CategoryCharts spendingEntries={data[currentMonth]['values']} />}
        {data && <Table rows={data[currentMonth]['values']} />}
      </div>
    </div>
  );
}

export default App;
