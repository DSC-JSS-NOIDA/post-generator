import React, { Component } from "react";

export class Preview extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <div className="preview">
        <img id="preview-image" width={data.width ? data.width : '100%'} height={data.height ? data.height : '500px'} src={data.image} alt="Random" />
      </div>
    );
  }
}

export default Preview;
