// import axios from 'axios';
// import { apiUrl, statusCodes } from './global-variables.js';

class AuthService {
    loginUser(loginData) {
        //////////////////
        // MOCK
        //////////////////
        console.log(loginData);
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\neyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.\nyRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw';

        //////////////////
        // REQUEST TO REAL API WITH AXIOS
        //////////////////
        // return axios
        //     .post(`${apiUrl}/auth/user/login`, loginData)
        //     .then(function(response) {
        //         if (response.status === statusCodes.accepted) {
        //             localStorage.setItem('userToken', response.data);
        //             return response;
        //         }
        //     });
    }

    logoutUser() {
        localStorage.removeItem('userToken');
    }

    createUser(userData) {
        //////////////////
        // MOCK
        //////////////////
        console.log(userData);
        return { data: userData };

        //////////////////
        // REQUEST WITH AXIOS
        //////////////////
        // return axios
        //     .post(`${apiUrl}/user`, userData)
        //     .then(function(response) {
        //         return response;
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
    }
}

export default new AuthService();
