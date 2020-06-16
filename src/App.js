import React from 'react';
import styles from './App.module.css';
import Task from './Task/Task';
import InputTask from './InputTask/InputTask';

let taskCounter = 1;
const taskFactory = (taskName) => {
  const id = ++taskCounter;
  const name = taskName;
  const readStatus = false;
  return {
    id,
    name,
    readStatus,
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: 'Read a book',
          readStatus: false,
        },
        // {
        //   id: 2,
        //   name: 'Eat breakfast',
        //   readStatus: false,
        // },
      ],
    };

    // event binding
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  // toggle tasks using its id
  toggleTaskStatus(id) {
    let tasks = [...this.state.tasks];
    let index = tasks.findIndex((t) => t.id === id);
    tasks[index].readStatus = !tasks[index].readStatus;
    this.setState({ tasks: tasks });
  }

  // remove task using its id
  removeTask(id) {
    let tasks = [...this.state.tasks];
    let index = tasks.findIndex((t) => t.id === id);
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  }

  addTask(name) {
    let tasks = [...this.state.tasks];
    let newTask = taskFactory(name);
    tasks.push(newTask);
    this.setState({ tasks: tasks });
  }

  render() {
    let tasks = this.state.tasks.map((t) => {
      return (
        <Task
          name={t.name}
          key={t.id}
          id={t.id}
          status={t.readStatus}
          toggle={this.toggleTaskStatus}
          remove={this.removeTask}
        />
      );
    });

    return (
      <div className={styles.App}>
        <div className={styles.TaskList}>{tasks}</div>
        <InputTask add={this.addTask} />
      </div>
    );
  }
}

export default App;
