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
        <h2>Zadania do zrobienia:</h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>Brak zadań, całkiem nieźle !</p>
        )}
      </div>
      <hr />
      <div className="done">
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: "10px" }}>
            wyświetlone jest jedynie 5 ostatnich elementów !
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
