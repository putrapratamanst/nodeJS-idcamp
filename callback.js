function getUsers(isOffline, callback){
    const users = ['john', 'ipul', 'korluka']

    if (isOffline){
        callback(new Error('cannot retrive users due offline'), null)
        return;
    }

    callback(null, users)
}

function usersCallback(error, users){
    if (error){
        console.log("process failed:", error.message)
    }

    console.log("process success:", users)
}

getUsers(true, usersCallback)