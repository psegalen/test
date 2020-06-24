export const navActions = {
  STORE_NAV: "STORE_NAV",
};

const initialState = {
  nav: null,
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case navActions.STORE_NAV:
      return { ...state, nav: action.nav };
    default:
      return state;
  }
};
