import React, {component} from 'react';
import './App.css';

class App extends component {
    constructor(props) {
        supter(props)

        this.state = {
            newTodo = 'test',//用户输入的文字
            todoList = [
                {id: 1, title: '第一个代办'}
            ]
        }
    }

    render() {
        let todos = this.state.todoList.map((item, index) => {
            return <li> {item.title} </li>
        })

        return (
            <div className="App">
                <h1>我的代办</h1>
                <div className="inputWrapper">
                    <input type="text" value={this.state.newTodo} />
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload
                </p>
                <ol>
                    {todos}
                </ol>
            </div>
        )
    }
}