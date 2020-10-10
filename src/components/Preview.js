import React, { Component } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import sample from "../assets/images/sample.jpeg";
export class Preview extends Component {
  render() {
    const { data } = this.props;

    let detailsToBeRendered = data.details.map((detail, ind) => {
      // For Bold option
      let fW = "normal";
      if (data.isBold[ind] === "true") {
        fW = "bold";
      }

      return (
        <Draggable bounds="parent" handle="img">
          <ResizableBox
            className="box"
            width={100}
            height={100}
            minConstraints={[50, 50]}
            style={{ position: "absolute", top: 0 }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                cursor: "grab",
                fontFamily: "Google Sans",
                color: data.colorVal[ind],
                fontSize: `${data.fontSize[ind]}px`,
                fontWeight: fW,
              }}
            >
              <p style={{ wordBreak: "break-word" }}>{detail}</p>
            </div>
          </ResizableBox>
        </Draggable>
      );
    });
    let illToBeRendered = [];
    let imgToBeRendered = [];

    for (let image = 0; image < data.imageIll.length; image++) {
      if (data.imageIll[image])
        illToBeRendered.push(
          <Draggable bounds="parent" handle="img">
            <ResizableBox
              className="box"
              width={100}
              height={100}
              minConstraints={[50, 50]}
              style={{ position: "absolute", top: 0 }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  cursor: "grab",
                }}
              >
                <img
                  src={data.imageIll[image]}
                  style={{ zIndex: "100" }}
                  width="100%"
                  alt=""
                />
              </div>
            </ResizableBox>
          </Draggable>
        );
    }
    for (let image = 0; image < data.upldImg.length; image++) {
      if (data.upldImg[image])
        imgToBeRendered.push(
          <Draggable bounds="parent" handle="img">
            <ResizableBox
              className="box"
              width={100}
              height={100}
              minConstraints={[50, 50]}
              style={{ position: "absolute", top: 0 }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  cursor: "grab",
                }}
              >
                <img
                  src={data.upldImg[image]}
                  style={{ zIndex: "100" }}
                  width="100%"
                  alt=""
                />
              </div>
            </ResizableBox>
          </Draggable>
        );
    }

    return (
      <div className="preview">
        {detailsToBeRendered}
        {illToBeRendered}
        {imgToBeRendered}
        <img
          id="preview-image"
          width={data.width ? data.width + "px" : "800px"}
          height={data.height ? data.height + "px" : "800px"}
          src={sample}
          alt="Random"
        />
      </div>
    );
  }
}

export default Preview;
