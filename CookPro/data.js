const random = function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const apiCall = fetch(`https://www.food2fork.com/api/get?key=45e79729de4de54e836d291c3d5a898f&rId=${getRandomInt(40000)}`)
.then(res => res.json)
.then(res => {
    console.log(res)
})
