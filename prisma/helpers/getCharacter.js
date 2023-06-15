export const getCharacter = async (user) => {
  try {
    //Get request to refresh User Data
    const getCharacterDataResponse = await fetch(`/api/character?auth0Sub=${user.sub}`, {
      method: 'GET',
    });

    if (getCharacterDataResponse.ok) {
      //return data
      const characterData = await getCharacterDataResponse.json();
      return characterData;
    } else {
      // Handle failure
      console.error('Failed to fetch character data');
    }
    // Handle error
  } catch (error) {
    console.error('Failed to fetch character data:', error);
  }
}