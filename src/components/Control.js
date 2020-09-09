import React, { Component } from 'react'
import { Preview } from './Preview'
import sample from '../assets/images/sample.jpg'
export class Control extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:sample
        }
    }
    handleChange = (event) =>{
        this.setState({
            image:  URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div className="main-content">
            <div className="control-panel">
                    <h2>Post Generator</h2>
                    <p>Tool that gives you template for your post.</p>
                    <input type="file" onChange={(event) => this.handleChange(event)}></input>
                    
            </div>
            <Preview data={this.state} />
            </div>
        )
    }
}

export default Control
