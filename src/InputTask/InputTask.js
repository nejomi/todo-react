import React from 'react';
import { useForm } from 'react-hook-form';
import './InputTask.module.css';

const InputTask = (props) => {
  const { register, handleSubmit } = useForm();

  const add = (data) => {
    props.add(data.name);
    document.querySelector('form').reset();
  };

  return (
    <form onSubmit={handleSubmit(add)}>
      <input
        type="text"
        placeholder="Task Name"
        name="name"
        ref={register({ required: true })}
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default InputTask;
