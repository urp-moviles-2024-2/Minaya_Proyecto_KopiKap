import { createContext, useReducer } from 'react';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';
// Definiendo el estado inicial
const initialState = {
  users: [],
  isAuthenticated: false,
  currentUser: null,
};

// Definiendo la función del reducer
function authReducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'DELETE_USER':
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? { ...user, ...action.payload.data } : user
        ),
      };
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
}

// Creando el contexto
export const AuthContext = createContext({
  users: [],
  isAuthenticated: false,
  currentUser: null,
  addUser: ({ firstname, lastname, email, password }) => {},
  deleteUser: (id) => {},
  updateUser: (id, { firstname, lastname, email, password }) => {},
  setUsers: (users) => {},
  login: (email, contraseña) => {},
  logout: (navigation) => {},
});

// Creando el provider component
export function AuthProvider({ children, navigation }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const addUser = (user) => {
    dispatch({ type: 'ADD_USER', payload: user });
  };

  const deleteUser = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  const updateUser = (id, data) => {
    dispatch({ type: 'UPDATE_USER', payload: { id, data } });
  };

  const setUsers = (users) => {
    dispatch({ type: 'SET_USERS', payload: users });
  };

  const login = (email, contraseña) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: user });
      })
      .catch((error) => {
        console.error('email o contraseña incorrectos', error.message);
      });
  };

  const logout = (navigation) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        console.log('User logged out');
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Logout Error', error.message);
      });
  };

  return (
    <AuthContext.Provider value={{ ...state, addUser, deleteUser, updateUser, setUsers, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}