export const createUser = async (user) => {
  //Post request to update the Move
  try {
    const response = await fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('User created successfully');
      // Handle success
    } else {
      console.error('Failed to create user');
      // Handle failure
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // Handle error
  }
};