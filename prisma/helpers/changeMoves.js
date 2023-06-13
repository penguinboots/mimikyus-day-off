export const changeMoves = async (user, newMoveArray) => {
  //Post request to update the Move

  try {
    const response = await fetch('/api/character', {
      method: 'POST',
      body: JSON.stringify({ user, newMoveArray }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Moves updated successfully');
      // Handle success
    } else {
      console.error('Failed to update moves');
      // Handle failure
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // Handle error
  }
};