export const saveAuth = ({ accessToken, refreshToken }) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };
  
  export const clearAuth = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };
  
  export const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
  };
  