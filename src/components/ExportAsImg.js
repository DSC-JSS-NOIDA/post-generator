import React, { Component } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

export class ExportAsImg extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    this.state = {};
  }
  removeHandlers(){
    let handlerColl = document.getElementsByClassName('react-resizable-handle-se');
    for(let i=0;i<handlerColl.length;i++){
      handlerColl[i].style.width="0%";
    }
  }
  showHandlers(){
    let handlerColl = document.getElementsByClassName('react-resizable-handle-se');
    for(let i=0;i<handlerColl.length;i++){
      handlerColl[i].style.width="100%";
  }
}
  render() {
    const { options } = this.props;

    return (
      <input
        type="button"
        onClick={() => {
          this.removeHandlers();
          options.downloadAs === "PNG"
            ? exportComponentAsPNG(this.props.compref)
            : exportComponentAsJPEG(this.props.compref);
            this.showHandlers();
        }}
        value="Download"
      />
    );
  }
}

export default ExportAsImg;
