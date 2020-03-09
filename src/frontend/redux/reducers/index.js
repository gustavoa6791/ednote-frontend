

const reducer = (state, action) => {
  switch (action.type) {
  
    case 'SUBJECTS_REQUEST':
      
      return {
        ...state,
        subjects: [ ...action.payload.data],
      };
    
      case 'UNLOCK_REQUEST':
        return {
           ...state,
        };

      
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
   case 'REMEMBER_REQUEST':
      return {
         ...state,
      };
    case 'CHANGE_REQUEST':
      return {
        ...state,
      };
    case 'CHANGE_PROFILE_REQUEST':
      return {
        ...state,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        users: action.payload,
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        users: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};

export default reducer;