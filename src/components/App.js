import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 5;

  state = {
    tasks: [
      {
        id: 0,
        text: "Play a game",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Run",
        date: "2018-02-25",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Go with dog",
        date: "2018-03-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Yoga and meditation",
        date: "2012-04-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Go to work",
        date: "2012-04-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    console.log(tasks);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
