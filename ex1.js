


async function fetchDataWithTimeout(url, timeout) {
                                                            // Create an AbortController instance
    const controller = new AbortController();
    const signal = controller.signal;
  
                                                      // Set up the timeout to abort the request
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);
  
    try {
                                                           // Fetch data with the signal
      const response = await fetch(url, { signal });
      
                                                          // Clear the timeout if the fetch completes successfully
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
                                                   // Parse the JSON data
      const data = await response.json();
      return data;
    } catch (error) {
                                                     // If the error is caused by aborting the request, throw a timeout error
      if (signal.aborted) {
        throw new Error('Request timed out');
      }
      throw error;
    }
  }
  
                                                                                    // Usage example:  within 1000 the data hs to be fetched.
  fetchDataWithTimeout('https://jsonplaceholder.typicode.com/todos/20', 1000)
    .then(data => {
      console.log('Data fetched successfully:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
  



