import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a.text < b.text) {
        return -1;
      }
      if (a.text > b.text) {
        return 1;
      } else return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={props.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={props.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h2>Task to do:</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Tasks done, nice!</p>}
      </div>
      <hr />
      <div className="done">
        <h3>
          Tasks done <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: "10px" }}>
            only the last 5 items are shown!
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
