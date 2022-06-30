import React from "react";

export class SearchResultItem extends React.Component<any, any> {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.price}</h2>
        <img src={this.props.picture} alt="" />
      </div>
    );
  }
}
