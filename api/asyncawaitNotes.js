function myCallBack(){
    console.log('done')
}

function longRunning(myParm, callback){
    //do long stuff
    //....


    //...then, the callback
    callback();
}

function promiseLongRun(myParam){//This functions determines when function is called and rejected
    //do stuff

    const myPromise = new Promise();

    return myPromise
}

const myresult = promiseLongRun(1)
myresult.then(result, ()=>{
    console.log(result);
})
//****Both above and below are doing the same thing**/
async function doPromise(){
    const result = await promiseLongRun();
    console.log(result)
}