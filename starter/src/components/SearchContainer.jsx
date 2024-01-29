import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from "../components";
import { clearFilter, handleSearch } from "../features/allJobs/allJobsSlice";

function SearchContainer() {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const handleChange = (e) => {
    dispatch(handleSearch({ name: e.target.name, value: e.target.value }));
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(clearFilter());
    console.log("apasa");
  };
  return (
    <Wrapper>
      <form action="" className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleChange}
            labelText="Search"
          />
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleChange}
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleChange}
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            labelText="sort"
            name="sort"
            value={sort}
            handleChange={handleChange}
            list={sortOptions}
          />
          <button
            onClick={handleReset}
            type="button"
            className="btn btn-block btn-danger"
            disabled={isLoading}
          >
            Reset
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SearchContainer;
