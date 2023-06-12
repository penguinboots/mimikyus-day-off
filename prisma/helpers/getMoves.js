export const getMoves = async (user) => {
  try {
      //Get request to refresh User Data
      const getMovesDataResponse = await fetch(`/api/move?auth0Sub=${user.sub}`, {
        method: 'GET',
      });
  
      if (getMovesDataResponse.ok) {
        //return data
        const movesData = await getMovesDataResponse.json();
        return movesData;
      } else {
        // Handle failure
        console.error('Failed to fetch moves data');
      }
      // Handle error
    } catch (error) {
      console.error('Failed to fetch moves data:', error);
    }
}