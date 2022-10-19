import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDo.css";

export default class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      displayedTodos: [],
      todos: [],
      newItem: "",
      dones: [],
    };
    this.todoItems = [];
  }

  handleClickAdd() {
    const oldTodos = this.state.todos;
    const item = { todoItem: this.state.newItem, strike: false };
    oldTodos.push(item);
    this.setState({ ...this.state, todos: oldTodos });
    this.todoItems.push({ todoItem: this.state.newItem, checked: false });
  }

  strikeItem(index) {
    const tempTodos = this.state.todos;
    tempTodos[index].strike = true;
    this.setState({ ...this.state, todos: tempTodos });
  }

  handleClickFilter() {
    const oldTodos = this.state.todos;
    const filterOldTodos = oldTodos.filter((item) => item.strike);
    if (filterOldTodos.length > 0) {
      console.log(this.state);
      this.setState({
        ...this.state,
        dones: filterOldTodos,
        todos: oldTodos.filter((item) => !item.strike),
      });
    }
  }

  inputNewItem(e) {
    const input = e.target.value;
    this.setState({ ...this.state, newItem: input });
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.inputNewItem(e)}
          value={this.state.newItem}
        />
        <button onClick={() => this.handleClickAdd()}>Add</button>
        <p></p>
        <button onClick={() => this.handleClickFilter()}>Filter</button>
        <h3>Aufgaben</h3>
        {this.state.todos.map((item, index) => (
          <ToDoItem
            text={item.todoItem}
            checked={item.strike}
            striked={() => this.strikeItem(index)}
            key={index}
          />
        ))}
        <h3>Erledigte Aufgaben</h3>
        {this.state.dones.map((item, i) => (
          <p className="checked" key={i}>
            {item.todoItem}
          </p>
        ))}
      </div>
    );
  }
}
