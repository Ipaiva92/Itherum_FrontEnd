import axios from '@/app/axiosConfig';

const loginRoute = (email: string, password: string) => {
axios.post("/User/Login", {email, password})
  .then((response) => {
    console.log( response.data);
  })
}

export default loginRoute;