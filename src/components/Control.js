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
      downloadAs: "PNG",
      fieldValues: [
        {
          key: 0,
          detail: (
            <input
              type="text"
              name="0"
              onChange={(e) => this.changeVal(e)}
              placeholder="Enter details"
            />
          ),
          font: (
            <input
              type="number"
              name="0"
              onChange={(e) => this.changeFontSize(e)}
              placeholder="Font size (in px)"
            />
          ),
          color: (
            <input
              type="color"
              name="0"
              onChange={(e) => this.changeColor(e)}
            />
          ),
          bold: (
            <input
              type="button"
              name="0"
              id="false"
              value="B"
              onClick={(e) => this.toggleBold(e)}
            />
          ),
        },
      ],
      keyNum: 0,
      details: [],
      colorVal: [],
      fontSize: [],
      isBold: [],
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
    // For Details
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
  }
  changeColor = (e) => {
    // For Color
    this.setState(
      Object.defineProperty({}, `color_${e.target.name}`, {
        value: e.target.value,
        enumerable: true,
      })
    );
    let color = this.state.colorVal;
    color[parseInt(e.target.name)] = e.target.value;

    this.setState({
      colorVal: color,
    });
  };

  changeFontSize = (e) => {
    // For Font size
    this.setState(
      Object.defineProperty({}, `font_${e.target.name}`, {
        value: e.target.value,
        enumerable: true,
      })
    );
    let font = this.state.fontSize;
    font[parseInt(e.target.name)] = e.target.value;

    this.setState({
      fontSize: font,
    });
  };

  toggleBold = (e) => {
    let isBold = this.state.isBold;

    if (e.target.id === "false") {
      e.target.id = "true";
      isBold[parseInt(e.target.name)] = "true";
      this.setState({ isBold: isBold });
    } else if (e.target.id === "true") {
      e.target.id = "false";
      isBold[parseInt(e.target.name)] = "false";
      this.setState({ isBold: isBold });
    }
  };

  addMoreFields = () => {
    let newKey = parseInt(this.state.keyNum) + 1;
    let newObj = {
      key: newKey,
      detail: (
        <input
          type="text"
          name={newKey}
          onChange={(e) => this.changeVal(e)}
          placeholder="Enter details"
        />
      ),
      font: (
        <input
          type="number"
          name={newKey}
          onChange={(e) => this.changeFontSize(e)}
          placeholder="Font size (in px)"
        />
      ),
      color: (
        <input
          type="color"
          name={newKey}
          onChange={(e) => this.changeColor(e)}
        />
      ),
      bold: (
        <input
          type="button"
          name={newKey}
          value="B"
          id="false"
          onClick={(e) => this.toggleBold(e)}
        />
      ),
    };

    let newArr = [...this.state.fieldValues, newObj];

    this.setState({
      detailsFields: newArr,
      fieldValues: newArr,
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
          {this.state.fieldValues.map((element) => {
            return (
              <>
                {element.detail}
                {element.font}
                {element.bold}
                {element.color}
              </>
            );
          })}
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
