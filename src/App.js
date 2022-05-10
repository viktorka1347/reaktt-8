import React from 'react';
import './App.css';
import TaskHeader from './TaskHeader';
import ListApp from './task1/ListApp';
import JsonFetch from './task2/JsonFetch';

function App() {
  return (<React.Fragment>
    <div className="task-1">
      <TaskHeader title="Задача 1" />
      <ListApp />
    </div>
    <div className="task-2">
      <TaskHeader title="Задача 2" />
      <div className="task-2-container">
        <JsonFetch path="data" />
        <JsonFetch path="error" />
        <JsonFetch path="loading" />
        <JsonFetch path="non_existent" />
      </div>
    </div>
  </React.Fragment>);
}

export default App;