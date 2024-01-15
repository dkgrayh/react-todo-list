import { useEffect, useState } from 'react';
import './styles.css';
import NewTodoForm from './components/NewTodoForm';
import NewTodoList from './components/NewTodoList';
function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <NewTodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
