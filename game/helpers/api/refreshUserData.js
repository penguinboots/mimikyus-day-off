export const refreshUserData = async (user) => {
  try {
      //Get request to refresh User Data
      const getUserDataResponse = await fetch(`/api/getUserData?auth0Sub=${user.auth0Sub}`, {
        method: 'GET',
      });
  
      if (getUserDataResponse.ok) {
        const userData = await getUserDataResponse.json();
        return userData;
      } else {
        console.error('Failed to fetch user data');
        // Handle failure
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      // Handle error
    }
}