import React from 'react';
import { Checkbox } from './Checkbox';
import { useTasks, useProjects } from '../hooks';

export const Tasks = () => {
  const { tasks } = useTasks('1');
  const projects: any = useProjects().projects;

  console.log(tasks);

  let projectName = '';

  return (
    <div className='tasks' data-testid='tasks'>
      <h2>{projectName}</h2>
      <ul className='tasks__list'>
        {tasks.map((task: any) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
