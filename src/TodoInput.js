import react, {component} from 'react'

export default class TodoInput extends Component {
    render() {
        return <input type="text" value={this.props.content} alt="logo"/>
    }
}