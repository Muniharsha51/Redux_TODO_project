



import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../redux/actions';
import './TodoApp.css';

const TodoApp = ({ todos, addTodo, deleteTodo, toggleTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter todo item" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.text}</span>
            <div>
              <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
