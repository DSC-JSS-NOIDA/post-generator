import React, { Component } from "react";
import { Preview } from "./Preview";
import ExportAsImg from "./ExportAsImg";
import i1 from "../assets/images/illustration/1.png";
import i2 from "../assets/images/illustration/2.png";
import i3 from "../assets/images/illustration/3.png";
import i4 from "../assets/images/illustration/4.png";
import i5 from "../assets/images/illustration/5.png";
import i6 from "../assets/images/illustration/6.png";
import i7 from "../assets/images/illustration/7.png";

export class Control extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    this.state = {
      width: "800px",
      height: "800px",
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
      imageIll: [],
      upldImg: [],
      upldField: [
        {
          keyNum: 0,
          renderEle: (
            <div className="file_sec" key={0}>
              <input
                type="file"
                onChange={(event) => this.handleChange(event)}
              />
              <i
                name={0}
                onClick={(e) => this.handleDelete(e)}
                className="fa close fa-close fa-lg"
              ></i>
            </div>
          ),
        },
      ],
      upldKey: 0,
      toBeDownloaded: <Preview data={this.state} />,
    };
  }
  handleChange = (event) => {
    let upldArr = this.state.upldImg;
    upldArr.push(URL.createObjectURL(event.target.files[0]));
    this.setState({
      upldImg: upldArr,
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
  addIllust = (e) => {
    let imgObj = e.target.src;
    let newArr = this.state.imageIll;
    newArr.push(imgObj);
    this.setState({ imageIll: newArr });
  };
  removeAll = () => {
    this.setState({
      imageIll: [],
    });
  };
  addUpldFields = () => {
    let upldArr = this.state.upldField;
    let upldKey = this.state.upldKey + 1;
    upldArr.push({
      keyNum: upldKey,
      renderEle: (
        <div className="file_sec" key={upldKey}>
          <input type="file" onChange={(event) => this.handleChange(event)} />
          <i
            name={upldKey}
            onClick={(e) => this.handleDelete(e)}
            className="fa close fa-close fa-lg"
          ></i>
        </div>
      ),
    });
    this.setState({ upldKey: upldKey, upldField: upldArr });
  };
  handleDelete = (e) => {
    let upldArr = this.state.upldField;
    let newUpldImg = this.state.upldImg;
    newUpldImg[parseInt(e.target.getAttribute("name"))] = null;
    upldArr[parseInt(e.target.getAttribute("name"))] = undefined;
    this.setState({ upldField: upldArr, upldImg: newUpldImg });
    console.log(this.state.upldField);
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
    let illArray = [i1, i2, i3, i4, i5, i6, i7];
    let upldArr = this.state.upldField
      .filter((ele) => ele !== undefined)
      .map((ele) => ele.renderEle);
    console.log(upldArr);
    return (
      <div className="main-content">
        <div className="control-panel">
          <h2>Snappify</h2>
          <p>Tool that gives your social media ready post.</p>
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
          {this.state.fieldValues.map((element, ind) => {
            return (
              <div key={ind} className="field_vals">
                {element.detail}
                {element.font}
                {element.bold}
                {element.color}
              </div>
            );
          })}
          <input
            type="button"
            value="Add More Fields"
            onClick={() => this.addMoreFields()}
          />
          <div className="illustration d-flex flex-wrap justify-content-center">
            {illArray.map((image, ind) => (
              <img
                src={image}
                name="0"
                id={ind}
                onClick={(e) => this.addIllust(e)}
                width="100"
                key={ind}
                alt=""
              />
            ))}
          </div>
          <input
            type="button"
            value="Remove Illustrations"
            onClick={() => this.removeAll()}
          />
          <div className="file_up">{upldArr}</div>
          <input
            type="button"
            value="Add More Images"
            onClick={() => this.addUpldFields()}
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
