import react, {component} from 'react'

export default class TodoItem extends Component {
    render() {
        return <div>{this.props.todo.title}</div>
    }
}