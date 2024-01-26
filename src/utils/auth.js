
export const isLoggedIn = () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  return loggedInUser !== null;
};
// utils/auth.js
export const isAllowedAccess = (allowedRoles, userRole) => {
  return allowedRoles.includes(userRole);
};
