import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './componentes/header';
import Body from './componentes/body';
import TodoInput from './componentes/todoInput';
import TodoItem from './componentes/todoItem';


class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Make dinner tonight" },
        { id: 1, text: "Fold Me Laundry" },
        { id: 2, text: "Learn how to code simple" }
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todoText) {
    let todos=this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId

    });
  }


  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo,index) =>todo.id!==id)
    })

    
  }

  render() {

    return (
      <div className="wrapper">
        <div className="todo-wrapper">
            <Header />
          <div className="card-body">
            <Body />
            <TodoInput todoText="" addTodo={this.addTodo} />
            <ul>
              {
                this.state.todos.map((todo) => {
                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />

                })
              }
            </ul>
          </div>
        </div>
      </div>

    )
  }
}
export default App;
