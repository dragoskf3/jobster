import React from "react";
import { JobsContainer, SearchContainer } from "../../components";
import { useSelector } from "react-redux";

function AllJobs() {
  const { totalJobs } = useSelector((store) => store.allJobs);
  return (
    <>
      <SearchContainer />
      <p>{totalJobs}</p>
      <JobsContainer />
    </>
  );
}

export default AllJobs;
