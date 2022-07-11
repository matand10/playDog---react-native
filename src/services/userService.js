export const userService = {
    getUserById,
    login,
    signout,
}

const KEY = 'users'

async function getUserById(userId) {
    const users = await dbService.query(KEY)
    return users.find(user => user._id === userId)
}

async function login(name,password) {
    const users = await dbService.query(KEY)
    if (!users.length){
        
    }
    let user = users.find(user => user.name === name && user.password===password)
    if (!user) return user
    else sessionStorage.setItem(KEY, user._id);
    return user
}

function signout() {
    sessionStorage.removeItem(KEY)
}

function _newUsers() {
    return [{
        name: 'Tamir Geron',
        email: 'tamir1234432@gmail'
    }]
}