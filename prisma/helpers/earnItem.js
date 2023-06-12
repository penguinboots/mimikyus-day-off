export const earnItem = async (user, itemName, quantity) => {
  // POST request to update the item
  try {
    const response = await fetch('/api/item', {
      method: 'POST',
      body: JSON.stringify({ user, itemName, quantity }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Item earned successfully');
      // Handle success
    } else {
      console.error('Failed to earn item');
      // Handle failure
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // Handle error
  }
};