// inactivity.js

import { goto } from "@sapper/app";

export function redirectLockScreen() {

  goto("/lock-screen");
}

let timeoutId;

export function startInactivityTimer() {
    
  // Set the timeout to 1 minute (60,000 milliseconds)
  timeoutId = setTimeout(redirectLockScreen, 60000);

  // Attach event listeners to reset the timer on user activity
  document.addEventListener('mousemove', resetInactivityTimer);
  document.addEventListener('keydown', resetInactivityTimer);
}

export function resetInactivityTimer() {
  // Reset the timeout when there is user activity
  clearTimeout(timeoutId);
  startInactivityTimer();
}
