import axios from 'axios';
import Swal from 'sweetalert2'

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const searchRequest = payload => ({
  type: 'SEARCH_REQUEST',
  payload,
});

export const searchRequestAll = payload => ({ 
  type: 'SEARCH_REQUEST_ALL',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});


export const rememberRequest = payload => ({
  type: 'REMEMBER_REQUEST',
  payload,
});

export const unlockRequest = payload => ({
  type: 'UNLOCK_REQUEST',
  payload,
});

export const changeRequest = payload => ({
  type: 'CHANGE_REQUEST',
  payload,
});

export const changeProfileRequest = payload => ({
  type: 'CHANGE_PROFILE_REQUEST',
  payload,
});

export const registerUser = (payload, redirecUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)

      .then(({ data }) => dispatch(registerRequest(data)))

      .then(() => {
        window.location.href = redirecUrl;
      })

      .catch(err => dispatch(setError(err)));
  };
};

export const changePassword = ({email, password, codigo}) => {
  return (dispatch) => {
  
    axios({
      url: '/auth/change',
      method: 'post',
      data: {
        email,
        password,
        codigo,
      }
    })
      .then(({ data }) => {
        dispatch(changeRequest(data));

        Swal.fire({
          title: 'Genial!',
          text: 'el cambio de contraseña fue exitoso',
          icon: 'success',
          position: 'top',
          toast: true,
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,

        })
      })
   

      .catch(err => dispatch(setError(err)));
  };
};

export const rememberPassword = ({email}, redirecUrl) => {
  return (dispatch) => {
    
    
    axios({
      url: '/auth/remember',
      method: 'post',
      data: {
        email
      }
    })
      .then(({ data }) => {
        dispatch(rememberRequest(data));

        Swal.fire({
          title: 'Genial!',
          text: 'enviaremos la informacion al correo que proporcionaste',
          icon: 'success',
          position: 'top',
          toast: true,
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,

        })
      })
      .then(() => {
        setTimeout(() => {
          window.location.href = redirecUrl;
        }, 5000);
      })

      .catch(err => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirecUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.email}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.id}`;
        document.cookie = `rol=${data.rol}`;
        dispatch(loginRequest(data));

        Swal.fire({
          title: 'Genial!',
          text: 'inicio de sesion exitoso',
          icon: 'success',
          position: 'top',
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        })
      })

      .then(() => {
        setTimeout(() => {
          window.location.href = redirecUrl;

        }, 3000);

      })

      .catch(function (err) {
        console.log(err.response.data);

        if (err.response.data == "usuarioContraseña") {

          Swal.fire({
            title: 'Error!',
            text: 'Usuario o contarseña invalidas',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            position: 'top',
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            confirmButtonColor: '#F0544F'
          })

        } else if (err.response.data == "usuarioBloqueado") {

          Swal.fire({
            title: 'Error!',
            text: 'Usuario bloqueado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            position: 'top',
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            confirmButtonColor: '#F0544F'
          })
        }
        dispatch(setError(err))
      });
  };
};

export const searchUser = (data) => {
  
  
  return (dispatch) => {
    axios({
      url: '/auth/search',
      method: 'post',
      data: {
        data : data.buscar
      },
    })
      .then((data) => {
        dispatch(searchRequest(data.data.users));
      })

      .catch(function (err) {

        dispatch(setError(err))
      });
  };
};

export const changeProfile = (data) => {
  return (dispatch) => {
    axios({
      url: '/auth/changeProfile',
      method: 'post',
      data: {
        data : data
      },
    })
      .then(({ data }) => {
        dispatch(changeProfileRequest(data));
      })

      .catch(function (err) {

        dispatch(setError(err))
      });
  };
};


export const unlockUser = (data, url) => {
  return (dispatch) => {
    axios({
      url: '/auth/unlock',
      method: 'post',
      data: {
        data : data
      },
    })
      .then(({ data }) => {
        dispatch(unlockRequest(data));
      })

      
      .then(() => {
        
          window.location.href = url;

      })

      .catch(function (err) {

        dispatch(setError(err))
      });
  };
};

