import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
import './reset.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: 'test',//用户输入的文字
            todoList: [
                {id: 1, title: '第一个代办'}
            ]
        }
    }

    render() {
        let todos = this.state.todoList.map((item, index) => {
            // return <li> {item.title} </li>
            return (
                <li key={index}>
                    <TodoItem todo={item} />
                </li>
            )
        })

        return (
            <div className="App">
                <h1>我的代办</h1>
                <div className="inputWrapper">
                    {/*<input type="text" value={this.state.newTodo} />*/}
                    <TodoInput content={this.state.newTodo} />
                </div>
                <ol>
                    {todos}
                </ol>
            </div>
        )
    }
}

export default App