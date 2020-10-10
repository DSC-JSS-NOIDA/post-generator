import React, { Component } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";
import ReactDOM from "react-dom";
export class ExportAsImg extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    this.state = {};
  }

  render() {
    const { options } = this.props;

    return (
      <input
        type="button"
        onClick={() => {
          
          options.downloadAs === "PNG"
            ? exportComponentAsPNG(this.props.compref)
            : exportComponentAsJPEG(this.props.compref);
        }}
        value="Download"
      />
    );
  }
}

export default ExportAsImg;
