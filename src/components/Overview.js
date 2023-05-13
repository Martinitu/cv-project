import React from 'react';

const  OverviewGeneral; = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{ tasks.indexOf(task) + 1}, {task.text}</li>;
      })}
    </ul>
  );
};

export default OverviewGeneral;