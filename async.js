async function getData() {
    let response = await fetch("https://api.github.com/users")
    // json also async then  we mark the json as await bcz it takes the data from the server and it takes the time
    let data  = await response.json()
    console.log(data)
    console.log(response)
    
}

getData()