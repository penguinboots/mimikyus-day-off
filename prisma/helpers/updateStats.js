export const updateStats = async (user, newStatsObj) => {
  //Post request to update the Move

  try {
    const response = await fetch('/api/stats', {
      method: 'POST',
      body: JSON.stringify({ user, newStatsObj }),
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