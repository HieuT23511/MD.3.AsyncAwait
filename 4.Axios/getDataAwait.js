const axios = require("axios");
async function getJSONsync (){
   return (await axios.get(`http://jsonplaceholder.typicode.com/posts/`)).data.id
}
getJSONsync().then(result => {
    console.log(result)
})