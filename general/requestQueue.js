const requestQueue = setInterval(() => {
    console.log(Date.now(), 'REQUEST >>')
    setTimeout(() => console.log(Date.now(), 'RETURN'), 1700)
}, 1000)

setTimeout(() => clearInterval(requestQueue), 5000)