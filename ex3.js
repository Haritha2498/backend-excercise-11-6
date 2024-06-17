

async function processurl(uarray){
    const result=[];
    for(let i=0;i<uarray.length;i++){
        try{
            const data=await fetchDataWithTimeout(uarray[i]);
            result.push(data);

        }
        catch(error){
            console.log("error");
        }
    }
    return result;
}


async function fetchDataWithTimeout(url){
    const starttime=Date.now();
    try {
        const response = await fetch(url);
        const data = await response.json();
        const endTime = Date.now(); // End time
    
        console.log(`Fetched data from ${url} in ${endTime - startTime}ms`);
        return data;
      } catch (error) {
        console.log(`Error `);
      }

}



const urlarr=['https://jsonplaceholder.typicode.com/todos/20','https://jsonplaceholder.typicode.com/todos/21',
'https://jsonplaceholder.typicode.com/todos/22','https://jsonplaceholder.typicode.com/todos/23'];

processurl(urlarr);