async function fetchData (uri, noJson = false) {
    console.log('in FetchData: ', uri);

    return await fetch(`http://svc-api:47101/api/${uri}`, {
        headers: {'Content-Type':'application/json'},
        method: 'GET'
    }).then(response => response.clone()).then(data => {
        console.log('DATA: ', data)
    })
 
}

export default fetchData;