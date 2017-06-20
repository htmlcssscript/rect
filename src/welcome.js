import React from 'react';
//mount
class Welcome extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			date: new Date(),
			test: '1'
		}

	//    this.setState({
    //       date: new Date(), // 更新 date
    //       test: 'constructor'
    //      })

		console.log('我已经在 constructor 里将 props 和 state 初始化好了')

	   setInterval(() => {
			 this.setState({
				 data: new Date(),
				 test: 'setInterval'
			 })
		 }, 5000)
	}
    
	componentWillMount() {
		this.setState({
			date: new Date(), // 更新 date
			test: 'componentWillMount'
		})
		console.log('运行到这里的话,说明马上就要运行 render 了')
	}

	render() {
		console.log('嗯, 这里是 render ')
		return (
			<div>
				<h1>Hello, {this.props.name}</h1>
				<h2>{this.state.date.toString()}</h2>
			</div>
		)
	}

	componentDidMount() {
		this.setState({
			date: new Date(), // 更新 date
			test: 'componentDidMount'
		})
		console.log('已经挂载到页面里了')
	}
	// update

	//读取props
	componentWillReceiveProps() {
		this.setState = {
			data: new Date(),
			test: 'componentWillReceiveProps'
		}
	}
   //判断是否更新
	shouldComponentUpdate() {
		this.setState = {
            date: new Date(),
			test: 'shouldComponentUpdate'
		}
		return true
	}
  //更新中
   componentWillUpdate()　{
	//    this.setState = {
	// 	   date: new Date(),
	// 	   test: 'render'
	//    }
   }
//已经更新完毕
   componentDidUpdate() {
	//    this.setState = {
	// 	   date: new Date(),
	// 	   test: 'componentDidUpdate'
	//    }
   }
//删除数据
   componentWillUnMount() {
	   console.log('要死了')
   }

}

// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }
export default Welcome