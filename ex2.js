async function  array(arr){

    console.log(arr);
    const resarr=[];

    for(let i=0;i<arr.length;i++)
    {
        const res=await double(arr[i]);
        resarr.push(res);
        console.log("result="+resarr);
        }
        return resarr;
    
}
async function double(element){
    await delay(1000);
    return element*2
}

function delay(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}




const arrayelement=[1,2,3,4,5];
array(arrayelement)

