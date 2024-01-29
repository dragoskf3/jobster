import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export const links = [
  {
    id: 1,
    text: "Stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "All Jobs",
    path: "/all-jobs",
    icon: <MdQueryStats />,
  },

  {
    id: 3,
    text: "Add job",
    path: "/add-job",
    icon: <FaWpforms />,
  },

  {
    id: 4,
    text: "profile",
    path: "/profile",
    icon: <ImProfile />,
  },
];

export default links;
