import React, { Component } from "react";
import { Preview } from "./Preview";
import sample from "../assets/images/sample.jpg";
import ExportAsImg from "./ExportAsImg";

export class Control extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    this.state = {
      image: sample,
      width: "100%",
      height: "500px",
      detailsFields: [
        <input
          type="text"
          name="0"
          key="0"
          onChange={(e) => this.changeVal(e)}
          placeholder="Enter Details"
        />,
      ],
      keyNum: 0,
      details: [],
      toBeDownloaded: <Preview data={this.state} />,
    };
  }
  handleChange = (event) => {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
    });
  };
  changeWidth = (e) => {
    this.setState({
      width: e.target.value,
    });
  };
  changeHeight = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  changeVal(e) {
    this.setState(
      Object.defineProperty({}, `detail_${e.target.name}`, {
        value: e.target.value,
        enumerable: true,
      })
    );
    let details = this.state.details;
    details[parseInt(e.target.name)] = e.target.value;

    this.setState({
      details: details,
    });
    console.log(this.state);
  }

  addMoreFields = () => {
    let newKey = parseInt(this.state.keyNum) + 1;
    let newArr = [
      ...this.state.detailsFields,
      <input
        type="text"
        key={newKey}
        name={newKey}
        onChange={(e) => this.changeVal(e)}
        placeholder="Enter Details"
      />,
    ];
    this.setState({
      detailsFields: newArr,
      keyNum: newKey,
    });
  };
  render() {
    return (
      <div className="main-content">
        <div className="control-panel">
          <h2>Post Generator</h2>
          <p>Tool that gives your social media ready post.</p>
          <input type="file" onChange={(event) => this.handleChange(event)} />
          <input
            type="number"
            placeholder="Enter Width"
            onChange={(e) => this.changeWidth(e)}
          />
          <input
            type="number"
            placeholder="Enter Height"
            onChange={(e) => this.changeHeight(e)}
          />
          {this.state.detailsFields}

          <input
            type="button"
            value="Add More Fields"
            onClick={() => this.addMoreFields()}
          />
          <div className="download">
            <h5>Download as: </h5>
            <select
              name="downloadAs"
              id=""
              onClick={(e) => this.setState({ downloadAs: e.target.value })}
            >
              <option value="PNG">PNG</option>
              <option value="JPG">JPG</option>
            </select>
          </div>
          <ExportAsImg options={this.state} compref={this.componentRef} />
        </div>

        <Preview ref={this.componentRef} data={this.state} />
      </div>
    );
  }
}

export default Control;
