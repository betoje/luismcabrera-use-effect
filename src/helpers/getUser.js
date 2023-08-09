import axios from 'axios';

const getUser = async () => {
    const userId = Math.floor(Math.random()*10)+1;
    const url = "https://jsonplaceholder.typicode.com/users/"+userId;
    try {
        const res = await axios.get(url);
        // console.log(res);
        console.log(res.data);
        return res.data;
    } catch(error) {
        console.log(error);
        console.log(error.message);
        return error;
    }
}

export default getUser;