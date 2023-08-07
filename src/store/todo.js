import { makeAutoObservable } from "mobx"

class ToDo {
    todos = [
        { id: 1, title: 'Go to the shop', completed: false },
        { id: 2, title: 'Go to the gym', completed: false },
        { id: 3, title: 'Go to the stadium', completed: false },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addToDo(todo) {
        this.todos.push(todo)
    }

    removeToDo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeToDo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }

    fetchToDos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }

}

export default new ToDo()