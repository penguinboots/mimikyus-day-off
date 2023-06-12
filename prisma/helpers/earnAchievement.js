export const earnAchievement = async (user, achievementName) => {
  //Post request to update the Achievement
  const userId = user.id
  try {
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