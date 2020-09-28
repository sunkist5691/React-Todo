import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component {
   constructor(){
      super()
   }

   render(){
      return (
         <div className='TodoList'>
            {
               this.props.taskList.map( (eachTask) => {
                  return <Todo key={eachTask.id} toggleTask={this.props.toggleTask} todo={eachTask} />
               })
            }
            
            <TodoForm clearTodo={this.props.clearTodo} addTodo={this.props.addTodo}/>
         </div>
      )
   }
}


export default TodoList