export const getUserData = async (user) => {
  try {
      //Get request to refresh User Data
      const getUserDataResponse = await fetch(`/api/user?auth0Sub=${user.sub}`, {
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