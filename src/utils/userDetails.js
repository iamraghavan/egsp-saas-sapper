// utils.js
export const getUserInfo = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const loggedInUser = localStorage.getItem('loggedInUser');
  
      if (loggedInUser) {
        const { name: userName, username: userUsername, role: userRole, email: userEmail } = JSON.parse(loggedInUser);
        return { name: userName, username: userUsername, role: userRole, email: userEmail };
      }
    }
  
    // Return default values or handle the case where there's no logged-in user
    return { name: '', username: '', role: '', email: '' };
  };
  