import axios from 'axios';

const APIService = {
    getUsers: async () => {
        const response = await axios.get('http://localhost:3006/api/v1/users');
        return response.data;
    }
};

export default APIService;