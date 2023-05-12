const axios =require('axios');
async function getDateByAsyncAwait (){
    return await axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(result => {
            console.log(result.data)
        }).catch(err =>{
            console.log(err.message)
        })
}
getDateByAsyncAwait();
