import axios from 'axios';


export async function getSpendingData() {
  const data = await axios.get('http://localhost:8080/year/2024');
  console.log('data', data);
}