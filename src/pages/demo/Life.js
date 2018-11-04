import React from 'react'
import Child from './Child'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import './index.less'

export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        };
    }
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        var style = {
            padding: 50
        }
        return <div style={style}>
            <p>React 生命周期介绍</p>
            <Button onClick={this.handleClick.bind(this)}> antd 点击</Button>
            <button onClick={this.handleClick.bind(this)}>点击</button>
            <button onClick={this.handleAdd}>点击</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count} ></Child>
        </div>
    }
}