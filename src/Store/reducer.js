const initialState = {
    isFirstButtonActive: true,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_BUTTON':
        return {
          ...state,
          isFirstButtonActive: !state.isFirstButtonActive,
        };
      default:
        return state;
    }
  };
  
  export default reducer;