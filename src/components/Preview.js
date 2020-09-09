import React, { Component } from 'react'

export class Preview extends Component {
    
    render() {
        const {data} = this.props;
        return (
            <div className="preview">
                <img id="preview-image" width="100%" src={data.image} alt="Random" />
            </div>
        )
    }
}

export default Preview
