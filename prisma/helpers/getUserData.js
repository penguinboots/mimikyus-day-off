export const getUserData = async(user) => {
  //Get request to refresh User Data
  const getUserDataResponse = await fetch(`/api/user?auth0Sub=${user.sub}`, {
    method: 'GET',
  });

  if (getUserDataResponse.ok) {
    const userData = await getUserDataResponse.json();
    return userData;
  }
};
