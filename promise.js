function getUsers(isOffline){
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
            const users = ["asep", "kipli", "ogah"]

            if(isOffline){
                reject(new Error('cannot retrieve users due offline'))
                return
            }

            resolve(users)
        }, 20)
    });
}

getUsers(true)
    .then(users => console.log(users))
    .catch(error => console.log(error.message))