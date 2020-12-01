const User = require("./models").user
const TodoList = require("./models").todoList
const TodoItem = require("./models").todoItem

async function listWithUsers(){
    const todolists = await TodoList.findAll({include: {model: User}})
    return todolists.map(data => data.get({plain: true}))
}

// listWithUsers().then(data => console.log(data))

async function itemsAndList(){
    const todoitems = await TodoItem.findAll({include: {model: TodoList}})
    return todoitems.map(data => data.get({plain: true}))
}

itemsAndList().then(data => console.log(data))