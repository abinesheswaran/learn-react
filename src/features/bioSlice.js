import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Abinesh',
  age: 25,
  weight: 74,
  height: 169,
  salary: 80000,
  location: 'Bangalore',
};

const bioSlice = createSlice({
  name: 'bio',
  initialState,
  reducers: {
    nameChange(state, action) {
      state.name = action.payload;
    },

    ageChange(state, action) {
      state.age = action.payload;
    },

    weightChange(state, action) {
      state.weight = action.payload;
    },

    heightChange(state, action) {
      state.height = action.payload;
    },

    salaryChange(state, action) {
      state.salary = action.payload;
    },

    locationChange(state, action) {
      state.location = action.location;
    },
  },
});

export const {
  nameChange,
  ageChange,
  weightChange,
  heightChange,
  salaryChange,
  locationChange,
} = bioSlice.actions;

export default bioSlice.reducer;
