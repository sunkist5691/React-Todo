import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component {

  constructor(){

    super()

    this.state = {
      taskList: [],
    }

  }

  addTodo = todoName => {

    const newTask = {

      task: todoName,
      id: Date.now(),
      completed: false,

    }

    this.setState({
      taskList: [...this.state.taskList, newTask]
    })

  }

  toggleTask = (todoId) => {
    this.setState({
      taskList: this.state.taskList.map( (eachTask) => {
        if(eachTask.id === todoId) {
          return {
            ...eachTask,
            completed: !eachTask.completed,
          }
        }
        return eachTask
      })  
    })
  }

  clearTodo = () => {

    this.setState({
      taskList: this.state.taskList.filter( (eachTask) => eachTask.completed === false )
    })

  }

  render() {

    return (

      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList clearTodo={this.clearTodo} toggleTask={this.toggleTask} taskList={this.state.taskList} addTodo={this.addTodo} />
      </div>

    );

  }
}

export default App;
