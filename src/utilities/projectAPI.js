// Creates data at the specifield endpoint.
export const createData = async (url, data) => {
    try{
        let response = await fetch(url, {method: 'POST', credentials: 'include',
        headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
        if(response.ok){
            if(response.status === 201){
                console.log('Data created/updated');
                return(true);
            }
            else if(response.status === 204){
                console.log('Data found!');
                return(true);
            }
        }
        if(response.status === 409){
            console.log('Data could not be created/updated!')
            return(false);
        }
        else if(response.status === 401){
            console.log('Credentials do not exist.');
            return(false);
        }
        else if(response.status === 403){
            console.log('User already logged in.');
            window.location.reload();
        }
        throw new Error('Create request was invalid.');
    }
    // If promise is rejected
    catch(error){
        console.log(error.message)
    }
}

// Fetch data from the specified endpoint.
export const retrieveData = async (url) => {
    try{
        let response = await fetch(url, {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cache': 'no-cache'
            },
            credentials: 'include'
          });
        if(response.ok){
            let jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Fetch request was invalid');
    }
    // If promise is rejected.
    catch(error){
        console.log(error.message);
    }
}

// Update data at the specified endpoint with the data being passed in.
export const updateData = async (url, data) => {
    try{
        let response = await fetch(url, {method: 'PUT', credentials: 'include',
        headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
        if(response.ok){
            console.log('Connection worked, PUT worked');
            if(response.status === 204){
                console.log('Resource was updated.');
                return(true);
            }
        }
        throw new Error('Update request was invalid.')
    }
    // If promise is rejected
    catch(error){
        console.log(error.message);
    }
}

// Delete data at the specified endpoint.
export const deleteData = async (url, data = []) => {
    try{
        let response = await fetch(url, {method: 'DELETE', credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify(data)});
        if(response.ok){
            console.log("Resource deleted");
            return true;
        }
        throw new Error('Delete request was invalid.');
    }
    // If promise is rejected.
    catch(error){
        console.log(error.message);
    }
}

