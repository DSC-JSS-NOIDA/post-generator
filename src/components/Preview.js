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
              fontFamily:'Google Sans',
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
    return (
      <div className="preview">
        {detailsToBeRendered}

        <img
          id="preview-image"
          width={data.width ? data.width : "100%"}
          height={data.height ? data.height : "500px"}
          src={data.image}
          alt="Random"
        />
      </div>
    );
  }
}

export default Preview;
