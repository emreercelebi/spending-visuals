import axios from 'axios';

export async function getSpendingData() {
  console.log('fetching sheets data');
  const res = await axios.get('http://localhost:8080/year/2024');
  return res.data;
}