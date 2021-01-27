import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, FiltersEnum } from "./../reducers/filtersSlice";
import { RootState } from "./../reducers/.";

const FiltersCheckbox = ({
  children,
  filter
}: {
  children: React.ReactNode;
  filter: FiltersEnum;
}) => {
  const dispatch = useDispatch();

  const activeFilter = useSelector((state: RootState) => state.filter);

  const active = activeFilter === filter;

  return (
    <span onClick={() => dispatch(setFilter(filter))}>
      <input readOnly checked={active} disabled={active} type="checkbox" />
      <label style={{ color: active ? "grey" : "black" }}>{children}</label>
    </span>
  );
};

export default FiltersCheckbox;
