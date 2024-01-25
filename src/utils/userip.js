// utils.js
export const getUserIP = async () => {
    try {
      const response = await fetch('https://api64.ipify.org/?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching user IP:', error.message);
      return null;
    }
  };
  