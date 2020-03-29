async function fetchData (uri) {
    return await fetch(`https://svc.metrotransit.org/NexTrip/${uri}?format=json`)
      .then(response => {
          return response.text();
      })
}

export default fetchData;