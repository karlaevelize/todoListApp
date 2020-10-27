const User = require("./models").user
const TodoList = require("./models").todoList
const TodoItem = require("./models").todoItem

async function listwithUser(){
    const users = await TodoList.findAll({include: {model: User}})
    return users.map(user => user.get({plain: true}))
}

// listwithUser().then(user => console.log(user))

async function itemsWithLists(){
    const items = await TodoItem.findAll({include: {model: TodoList}})
    return items.map(item => item.get({plain: true}))
}

// itemsWithLists().then(item => console.log(item))

async function getUsers(){
    const users = await User.findAll()
    return users.map(user => user.get({ plain: true }));
}

getUsers().then(user => console.log(user))