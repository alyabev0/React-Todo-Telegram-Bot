import '../App.css';
import React from 'react';

const MainContent = () => (
    <React.Fragment>
      <main>
        <ul>
      <li>
        <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
              Написать хороший код
            </label>
            </li>
            <li>
            <input id="todo-1" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-1">
              Проверить его работу
            </label>
            </li>
            <li>
            <input id="todo-2" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-2">
              Приятно удивиться
            </label>
            </li>
            </ul>
      </main>
      </React.Fragment>
  );
  
  export default MainContent;