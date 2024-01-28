import axios from 'axios';
const URL = 'https://65b27f3a9bfb12f6eafdf0dc.mockapi.io/api/todos/';

function saveTask(task) {
  console.log('POST');

  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(task),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   return fetch(URL, options);

  return axios.post(URL, task);
}

function loadTasks() {
  console.log('GET');

  //   return fetch(URL).then(respons => respons.json());

  return axios.get(URL).then(respons => respons.data);
}

function updateTask(id, status) {
  console.log(`PUT: \n\tid ${id} \n\tstatus ${status}`);

  //   const options = {
  //     method: 'PUT',
  //     body: JSON.stringify({ isDone: status }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   return fetch(`${URL}/${id}`, options).then(respons => respons.json());

  return axios.put(`${URL}/${id}`, { isDone: status });
}

function daleteTask(id) {
  console.log(`DELETE: id: ${id}`);

  //   const options = {
  //     method: 'DELETE',
  //   };

  //   return fetch(`${URL}/${id}`, options);

  return axios.delete(`${URL}/${id}`);
}

export { saveTask, loadTasks, updateTask, daleteTask };
