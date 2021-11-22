const getIsAuthenticated = (state) => state.auth.isAuthenticated
const getUserProfile = (state) => state.auth.user

export default {
  getIsAuthenticated,
  getUserProfile,
}
