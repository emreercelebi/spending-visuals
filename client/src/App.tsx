import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import { getSpendingData } from './sheets';
import { Table } from './components/Table';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      getSpendingData().then(res => setData(res))
    }
  }, [data]);
  const [currentMonth, setCurrentMonth] = useState("Sep");
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ].filter(month => data && data[month]);

  return (
    <div className="App">
      {data && <Table rows={data[currentMonth]['data']['values']} />}
    </div>
  );
}

export default App;
