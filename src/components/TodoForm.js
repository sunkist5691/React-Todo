import React from 'react'

class TodoForm extends React.Component {
   constructor() {
      super()
      this.state = {
         task: '',
      }
   }

   changeHandler = e => {
      this.setState({
         task: e.target.value
      })
   }

   formSubmit = e => {

      e.preventDefault()

      this.props.addTodo(this.state.task)

      this.setState({
         task: ''
      })

   }

   render() {
      return (

         <div className='TodoForm'>
            <form onSubmit={this.formSubmit}>
               <input 
                  type='text' 
                  name='item' 
                  placeholder='...todo' 
                  value={this.state.task} 
                  onChange={this.changeHandler}
               />
               <button type='submit'>Add Todo</button>
            </form>
            <button type='submit' onClick={ () => this.props.clearTodo() }>Clear Completed</button>
         </div>

      )
   }
}

export default TodoForm
