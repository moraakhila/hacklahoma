fetch('https://swapi.dev/api/people/1/')
    .then(response => {
        // handle the response
        console.log(response)
    })
    .catch(error => {
        // handle the error
        console.log(error)
    });
