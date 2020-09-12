import React, { Component } from "react";
import Draggable from "react-draggable";

export class Preview extends Component {
  render() {
    const { data } = this.props;

    let detailsToBeRendered = data.details
      .filter((element) => element.length > 0)
      .map((detail) => {
        return (
          <Draggable bounds="parent">
            <div style={{ position: "absolute", top: 0 }}>{detail}</div>
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
