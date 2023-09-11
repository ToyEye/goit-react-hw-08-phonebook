const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user.name;

const authSelectors = { getIsLoggedIn, getUser };

export default authSelectors;
