export const learnMove = async (user, moveName) => {
  //Post request to update the Move
  try {
    const response = await fetch('/api/move', {
      method: 'POST',
      body: JSON.stringify({ user, moveName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Move updated successfully');
      // Handle success
    } else {
      console.error('Failed to update move');
      // Handle failure
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // Handle error
  }
};