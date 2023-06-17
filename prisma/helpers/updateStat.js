export const updateStat = async (user, stat, amount) => {
  //Post request to update the Move

  try {
    const response = await fetch('/api/stats', {
      method: 'POST',
      body: JSON.stringify({ user, stat, amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Stats updated successfully');
      // Handle success
    } else {
      console.error('Failed to update stats');
      // Handle failure
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // Handle error
  }
};