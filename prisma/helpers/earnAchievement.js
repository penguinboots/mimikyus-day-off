const earnAchievement = async () => {
  try {
    const userId = 1; // Set the desired user ID
    const achievementName = 'something shiny'; // Set the desired achievement name

    const response = await fetch('/api/achievement', {
      method: 'POST',
      body: JSON.stringify({ userId, achievementName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Achievement updated successfully');
      // Handle success
    } else {
      console.error('Failed to update achievement');
      // Handle failure
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // Handle error
  }
};