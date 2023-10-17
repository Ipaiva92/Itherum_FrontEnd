import axios from '@/app/axiosConfig';

const loginRoute = (email: string, password: string) => {
axios.post("/User/Login", {email, password})
  .then((response) => {
    console.log( response.data);
  }).catch((error) => {
    console.error('POST Request Error:', error);
  });
}

export default loginRoute;