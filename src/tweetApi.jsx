import axios from 'axios';

export async function getUsers() {
  const { data } = await axios('https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users');
  //   console.log(data);
  return data;
}

export async function updateUser(id, status) {
  const data = await axios.put(
    `https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users/${id}`,
    {
      status,
    }
  );
  //   console.log(data);
  return data;
}
