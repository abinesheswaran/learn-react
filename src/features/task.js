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
  if (gym === 'High') return { type: 'gym', gym };
  else {
    return async function (dispatch) {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log(await response.json());
      dispatch({ type: 'gym', gym });
    };
  }
};

export { taskReducer, InitialTaskState, gymChangeAction };
