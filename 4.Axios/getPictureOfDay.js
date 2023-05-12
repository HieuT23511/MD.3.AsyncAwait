const axios = require(`axios`);

function getDataByPromise() {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
}

getDataByPromise().then((res) => {
    console.log(res.data)
})