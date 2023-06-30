import axios from 'axios';

// const url = 'https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users'
axios.defaults.baseURL = 'https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/users';
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 3);

export async function getUsersApi({ page, limit }) {
  const { data } = await axios({ params: { page, limit } });
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
