fetch("./JS/info.json")

  .then((info) => info.json())

  .then(res => console.log(res));