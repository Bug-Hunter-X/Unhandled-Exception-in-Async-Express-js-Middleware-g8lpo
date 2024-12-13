const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... simulate database operation
    const user = await someAsyncOperation(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Internal Server Error');
  }
});

// ... other routes

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Simulate an async database operation
async function someAsyncOperation(userId){
  //Simulate a database error
  if(userId === 'error'){
    throw new Error('Database Error');
  }
  return {id: userId, name: `user-${userId}`};
}