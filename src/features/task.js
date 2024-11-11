const InitialTaskState = {
  gym: 'Moderate',
};

const taskReducer = (state = InitialTaskState, action) => {
  switch (action.type) {
    case 'gym':
      return { ...state, name: action.gym };
    default:
      return state;
  }
};

const gymChangeAction = (gym) => {
  return { type: 'gym', gym };
};

export { taskReducer, InitialTaskState, gymChangeAction };
