import axios from 'axios';

let accessToken = null;
let refreshToken = null;

const authServices = {
  async login(email, password) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', { email, password });
      const { access_token, refresh_token } = response.data;

      // Store tokens in memory
      accessToken = access_token;
      refreshToken = refresh_token;

      // Store tokens in local storage
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);

      return accessToken;
    } catch (error) {
      throw new Error('Error logging in');
    }
  },

  async refreshAccessToken() {
    try {
      const savedRefreshToken = localStorage.getItem('refresh_token');

      if (!savedRefreshToken) {
        throw new Error('No refresh token found');
      }

      const response = await axios.post('http://127.0.0.1:8000/refresh-token/', { refresh_token: savedRefreshToken });
      accessToken = response.data.access_token;

      // Update the access token in local storage
      localStorage.setItem('access_token', accessToken);

      return accessToken;
    } catch (error) {
      throw new Error('Error refreshing access token');
    }
  },

  getAccessToken() {
    return accessToken || localStorage.getItem('access_token');
  },

  async logout() {
    // Clear tokens from memory
    accessToken = null;
    refreshToken = null;

    // Clear tokens from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    // Redirect to the login page or any other appropriate action
    window.location.href = '/login';
  },

  setRefreshToken(token) {
    refreshToken = token;
  },

  async isAuthenticated() {
    const accessToken = this.getAccessToken();

    // Check if the access token exists and is valid
    if (accessToken) {
      // You can add additional logic here to verify the validity of the token if needed
      return true;
    }

    return false;
  },
};

export default authServices;
