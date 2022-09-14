import React from "react";

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.striked();
  }

  render() {
    return (
      <div className="ToDoItem">
        <p className={this.props.checked ? "checked" : null}>
          {this.props.text}
          <button onClick={() => this.handleClick()}>Done!</button>
        </p>
      </div>
    );
  }
}
