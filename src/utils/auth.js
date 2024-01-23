
export const isLoggedIn = () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  return loggedInUser !== null;
};
