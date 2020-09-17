import React, { Component } from "react";
import Draggable from "react-draggable";

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
        <Draggable bounds="parent" key={ind}>
          <div
            style={{
              position: "absolute",
              top: 0,
              cursor:'grab',
              fontFamily: "Google Sans",
              color: data.colorVal[ind],
              fontSize: `${data.fontSize[ind]}px`,
              fontWeight: fW,
            }}
          >
            {detail}
          </div>
        </Draggable>
      );
    });
    
    let illToBeRendered = data.imageIll.map((image) => {
      let illustration = [];
      for (let i = 0; i < image.count; i++) {
        illustration.push(
          <Draggable bounds="parent">
            <div
              style={{
                position: "absolute",
                top: 0,
                cursor:'grab',
              }}
            >
              <img src={image.source} width="100" alt="" />
            </div>
          </Draggable>
        );
      }
      return illustration;
    });
    return (
      <div className="preview">
        {detailsToBeRendered}
        {illToBeRendered}

        <img
          id="preview-image"
          width={data.width ? data.width+'px' : "500px"}
          height={data.height ? data.height+'px' : "500px"}
          src={data.image}
          alt="Random"
        />
      </div>
    );
  }
}

export default Preview;
