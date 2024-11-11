const InitialBioState = {
  name: 'Abinesh',
  age: 25,
  weight: 74,
  height: 169,
  salary: 80000,
  location: 'Bangalore',
};

const bioReducer = (state = InitialBioState, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.name };
    case 'age':
      return { ...state, age: action.age };
    case 'weight':
      return { ...state, weight: action.weight };
    case 'height':
      return { ...state, height: action.height };
    case 'salary':
      return { ...state, name: action.name };
    case 'location':
      return { ...state, name: action.name };
    default:
      return state;
  }
};

const nameChangeAction = (name) => {
  return { type: 'name', name };
};
const ageChangeAction = (age) => {
  return { type: 'age', age };
};
const weightChangeAction = (weight) => {
  return { type: 'weight', weight };
};
const heightChangeAction = (height) => {
  return { type: 'height', height };
};
const salaryChangeAction = (salary) => {
  return { type: 'salary', salary };
};
const locationChangeAction = (location) => {
  return { type: 'location', location };
};

export {
  bioReducer,
  InitialBioState,
  nameChangeAction,
  ageChangeAction,
  weightChangeAction,
  heightChangeAction,
  salaryChangeAction,
  locationChangeAction,
};
