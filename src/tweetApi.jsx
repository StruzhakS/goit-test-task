import axios from 'axios';

export async function getUsersApi() {
  const { data } = await axios('https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users');
  //   console.log(data);
  return data;
}

export async function updateUserApi(id, following) {
  const data = await axios.put(
    `https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users/${id}`,
    { following }
  );
  return data;
}
