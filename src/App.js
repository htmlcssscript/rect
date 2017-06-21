import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
import './reset.css';
import './App.css';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: '',//用户输入的文字
            todoList: []
        }
    }

    render() {
        let todos = this.state.todoList                        //!true->过滤没有选中的数据
                   .filter(item => !item.status) 
                   .map((item,index) => {
                     return (
                      <li key={index}>
                          <TodoItem todo={item} 
                          onToggle={this.toggle.bind(this)}
                          onDelete={this.delete.bind(this)}
                          />
                      </li>
                   )
                })
        console.log(todos)
        return (
            <div className="App">
                <h1>我的代办</h1>
                <div className="inputWrapper">
                    {/*<input type="text" value={this.state.newTodo} />*/}
                    <TodoInput
                      content={this.state.newTodo}
                      onSubmit={this.addTodo.bind(this)}
                      onChange={this.changeTitle.bind(this)}
                     />
                </div>
                <ol className="todoList">
                    {todos}
                </ol>
            </div>
        )
    }
    addTodo(e) {
       this.state.todoList.push({
           id: idMaker(),
           title: e.target.value,
           status: null,
           deleted: false
       })
       this.setState({
           newTodo: '',
           todoList: this.state.todoList
       })
    }
    changeTitle(e) {
        this.setState({
            newTodo: e.target.value,
            todoList: this.state.todoList
        })
    }
    toggle(e,todo){
      todo.status = todo.status === 'completed'?'': 'completed'
    }
    delete(e,todo){
      todo.deleted = true
      this.setState(this.state)
    }
}

export default App

let id = 0

function idMaker() {
  id += 1
  return id
}