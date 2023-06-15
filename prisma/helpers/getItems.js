export const getItems = async (user) => {
  try {
    // GET request to retrieve User's items
    const getItemsDataResponse = await fetch(`/api/item?auth0Sub=${user.sub}`, {
      method: 'GET',
    });

    if (getItemsDataResponse.ok) {
      // Return item data
      const itemsData = await getItemsDataResponse.json();
      return itemsData;
    } else {
      // Handle failure
      console.error('Failed to fetch items data');
    }
  } catch (error) {
    console.error('Failed to fetch items data:', error);
  }
};