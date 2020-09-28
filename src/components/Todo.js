import React from 'react'
import './Todo.css'

class Todo extends React.Component {
   constructor() {
      super()
   }

   render() {
      return (
         <div 
            onClick={ () => this.props.toggleTask(this.props.todo.id) }
            className={`todo${this.props.todo.completed ? ' completed' : ''}`}
         >
            <p>{this.props.todo.task}</p>
         </div>
      )
   }
}

export default Todo