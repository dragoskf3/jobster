import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customInstance from "../../utils/axios";
import { SearchContainer } from "../../components";
const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    handleSearch: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilter: (state) => {
      return { ...state, ...initialFiltersState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { jobs } = payload;
        state.jobs = jobs;
        state.totalJobs = jobs.length;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(showStats.pending, (state) => {
        setInterval.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { defaultStats, monthlyApplications } = payload;
        state.stats = defaultStats;
        state.monthlyApplications = monthlyApplications;
      })
      .addCase(showStats.rejected, (state) => {
        setInterval.isLoading = false;
      });
  },
});

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    const { search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobs;
    try {
      const url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
      if (search) {
        url = url + `&search=${search}`;
      }
      const response = await customInstance.get(url, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const showStats = createAsyncThunk(
  "allJobs/showStats",
  async (_, thunkAPI) => {
    try {
      const response = await customInstance("/jobs/stats", {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const { handleSearch, clearFilter } = allJobsSlice.actions;

export default allJobsSlice.reducer;
