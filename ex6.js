const axios = require('axios');

async function fetchdata(url){
    try{
        const result= await axios.get(url);
        const data=result.data;

        const data1=data.filter(dat=>dat.userId==1);

        data1.forEach(post=>{
            console.log(post.title);
        });
    }
    catch(error){
        console.log("error")
    }

}



fetchdata('https://jsonplaceholder.typicode.com/posts')