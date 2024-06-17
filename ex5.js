const axios = require('axios');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    console.log('Data fetched successfully:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}



fetchData('https://jsonplaceholder.typicode.com/todos/20');