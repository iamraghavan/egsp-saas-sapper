// src/utils/auth.js
import Swal from 'sweetalert2';

export const isLoggedIn = () => {
  const loggedInUser = localStorage.getItem('loggedInUser');

  // Check if the user is logged in
  if (loggedInUser !== null) {
    // Initialize the last activity timestamp on first login
    if (!localStorage.getItem('lastActivityTimestamp')) {
      localStorage.setItem('lastActivityTimestamp', new Date().getTime().toString());
    }

    // Attach event listeners for user activity
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keypress', handleUserActivity);

    // Set up a timeout to log out after 15 seconds of inactivity
    setupInactivityTimeout();

    return true;
  } else {
    // User is not logged in, perform logout actions
    logout();
    return false;
  }
};

const handleUserActivity = () => {
  // Update the last activity timestamp on user activity
  localStorage.setItem('lastActivityTimestamp', new Date().getTime().toString());
};

const setupInactivityTimeout = () => {
  // Set up a timeout to log out after 15 seconds of inactivity
  setTimeout(() => {
    logout();
  }, 15000);
};

const logout = () => {
  // Clear user data and perform logout actions
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('lastActivityTimestamp');

  // Remove event listeners for user activity
  document.removeEventListener('mousemove', handleUserActivity);
  document.removeEventListener('keypress', handleUserActivity);

  // Show SweetAlert notification about session termination
  Swal.fire({
    title: 'Session Expired',
    text: 'Your session has been terminated due to inactivity.',
    icon: 'info',
    timer: 3000, // Adjust the timer as needed
    showConfirmButton: false,
  });

  setTimeout(() => {
    window.location.href = '/';
  }, 2000);

  
};
