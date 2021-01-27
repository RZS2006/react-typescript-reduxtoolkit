import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./../reducers/todosSlice";

const AddTodoForm = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoDescription.trim().length > 0) {
            dispatch(addTodo({ description: todoDescription, id: uuidv4() }));
            setTodoDescription("");
          }
        }}
      >
        <input
          type="text"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
