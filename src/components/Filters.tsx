import { useDispatch } from "react-redux";
import { deleteAllTodos, deleteCompletedTodos } from "./../reducers/todosSlice";
import { FiltersEnum } from "./../reducers/filtersSlice";
import FiltersCheckbox from "./FiltersCheckbox";

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(deleteAllTodos());
          }}
        >
          Delete All
        </button>
        <button
          onClick={() => {
            dispatch(deleteCompletedTodos());
          }}
        >
          Delete Completed
        </button>
      </div>
      <div>
        <FiltersCheckbox filter={FiltersEnum.All}>Show All</FiltersCheckbox>
        <FiltersCheckbox filter={FiltersEnum.Completed}>
          Show Completed
        </FiltersCheckbox>
        <FiltersCheckbox filter={FiltersEnum.NonCompleted}>
          Show Non-completed
        </FiltersCheckbox>
      </div>
    </div>
  );
};

export default Filters;
