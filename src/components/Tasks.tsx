import React from 'react';
import { Checkbox } from './Checkbox';
import { useTasks, useProjects } from '../hooks';
import { Task } from '../types/index';

export const Tasks = () => {
  const { tasks }: { tasks: Task[] } = useTasks('1');
  const projects: any = useProjects().projects;

  console.log(tasks);

  let projectName = '';

  return (
    <div className='tasks' data-testid='tasks'>
      <h2>{projectName}</h2>
      <ul className='tasks__list'>
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
