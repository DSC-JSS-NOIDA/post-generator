import React, { Component } from 'react'
import { Preview } from './Preview'
import sample from '../assets/images/sample.jpg'
import InputField from './InputField'
export class Control extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:sample,
             width:'100%',
             height:'500px',
             detailsFields:[<InputField/>]
             
        }
    }
    handleChange = (event) =>{
        this.setState({
            image:  URL.createObjectURL(event.target.files[0])
        })
    }
    changeWidth =(e) => {
        this.setState({
            width:e.target.value
        })
    }
    changeHeight =(e) => {
        this.setState({
            height:e.target.value
        })
    }
    addMoreFields = () => {
        let newArr = [...this.state.detailsFields, <InputField />]
        this.setState({
            detailsFields:newArr
        })
    }
    render() {
        return (
            <div className="main-content">
            <div className="control-panel">
                    <h2>Post Generator</h2>
                    <p>Tool that gives your social media ready post.</p>
                    <input type="file" onChange={(event) => this.handleChange(event)}></input>
                    <input type="number" placeholder="Enter Width" onChange={(e) => this.changeWidth(e)}/>
                    <input type="number" placeholder="Enter Height" onChange={(e) => this.changeHeight(e)}/>
                    {this.state.detailsFields}
                    <input type="button" value="Add More Fields" onClick={() => this.addMoreFields()}/>

                    
                    
            </div>
            <Preview data={this.state} />
            </div>
        )
    }
}

export default Control
