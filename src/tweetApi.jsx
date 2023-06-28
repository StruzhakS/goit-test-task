import axios from 'axios';

export async function getUsers() {
  const { data } = await axios('https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users');
  console.log(data);
  return data;
}

export async function updateUser(userId) {
  const { data } = await axios.patch(
    `https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users/${userId}`
  );
  return data;
}
