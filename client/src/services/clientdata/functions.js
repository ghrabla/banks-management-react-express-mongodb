const axios = require('axios')

const functions = {
   // fake online rest pai for test
   fetchData: () =>
   axios
     .get('http://localhost:5050/data')
     .then(res => res.data)
     .catch(err => 'error')
}

module.exports = functions;