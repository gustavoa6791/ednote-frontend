

const reducer = (state, action) => {
  switch (action.type) {

    case  'EDITSUB_REQUEST':
      return {
        ...state,
        editSubject: action.payload,
        indexEditSubjects: action.index
      };

     
      case  'SUBJECTS_STUDENT_REQUEST':
        return {
          ...state,
          subjects: [ ...action.payload.data],
        };


    case 'SUBJECTS_REQUEST':
      return {
        ...state,
        subjects: [ ...action.payload.data],
      };
      case 'SET_SUBJECTS_REQUEST':

     
          return {
            ...state,
            subjects:  action.payload,
          };


      case 'UNLOCK_REQUEST':
        return {
           ...state,
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
    case 'LOGIN_REQUEST':
      return {
        ...state,
          subjectEdit: action.payload,
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

    default:
      return state;
  }
};

export default reducer;