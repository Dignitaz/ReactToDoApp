import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  hanldeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  hanldeCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert("Add a task");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 4;
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <input
          type="text"
          placeholder="Add task :)"
          value={this.state.text}
          onChange={this.hanldeText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.hanldeCheckbox}
        />
        <label htmlFor="important"> Priority </label>
        <br />
        <label htmlFor="date"> Deadline </label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;
