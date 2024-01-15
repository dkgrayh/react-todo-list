import PropTypes from 'prop-types';

export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => toggleTodo(id, event.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.any,
  id: PropTypes.string,
  title: PropTypes.string,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
