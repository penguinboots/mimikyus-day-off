export const getAchievements = async (user) => {
  try {
      //Get request to refresh User Data
      const getAchievementsDataResponse = await fetch(`/api/achievement?auth0Sub=${user.sub}`, {
        method: 'GET',
      });
  
      if (getAchievementsDataResponse.ok) {
        //return data
        const achievementsData = await getAchievementsDataResponse.json();
        return achievementsData;
      } else {
        // Handle failure
        console.error('Failed to fetch achievements data');
      }
      // Handle error
    } catch (error) {
      console.error('Failed to fetch achievements data:', error);
    }
}