import React from 'react';
import styles from './Task.module.css';
import deleteBtn from './delete.svg';

const task = (props) => {
  // array of class names for dynamic classes on toggle
  let taskClasses = [styles.Task];
  let btnClasses = [styles.TaskButton];

  // add classes to array if read status is true
  if (props.status) {
    taskClasses.push(styles.TaskFinished);
    btnClasses.push(styles.BtnFinished);
  }

  // event handlers for toggling and removing tasks
  const toggleStatus = () => {
    props.toggle(props.id);
  };

  const removeTask = () => {
    props.remove(props.id);
  };

  return (
    <div className={taskClasses.join(' ')}>
      <div className={btnClasses.join(' ')} onClick={toggleStatus}></div>
      {props.name}
      <img
        className={styles.DeleteButton}
        src={deleteBtn}
        alt="delete button"
        onClick={removeTask}
      />
    </div>
  );
};

export default task;
