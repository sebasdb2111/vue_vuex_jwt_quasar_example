import AuthService from '../app/servicies/auth-request.js';

const user = localStorage.getItem('userToken');
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            //////////////////
            // REQUEST TO MOCK
            //////////////////
            const userLogin = AuthService.loginUser(user);
            if (userLogin) {
                commit('loginSuccess', user);
                return user;
            } else {
                commit('loginFailure');
            }

            //////////////////
            // REQUEST TO REAL API
            //////////////////
            // return AuthService.loginUser(user).then(
            //     user => {
            //         commit('loginSuccess', user);
            //         return user;
            //     },
            //     error => {
            //         commit('loginFailure');
            //         return error;
            //     }
            // );
        },
        logout({ commit }) {
            AuthService.logoutUser();
            commit('logout');
        },
        signup({ commit }, user) {
            //////////////////
            // REQUEST TO MOCK
            //////////////////
            const userLogin = AuthService.createUser(user);
            if (userLogin) {
                commit('registerSuccess');
                return user;
            } else {
                commit('registerFailure');
            }

            //////////////////
            // REQUEST TO REAL API
            //////////////////
            // return AuthService.createUser(user).then(
            //     response => {
            //         commit('registerSuccess');
            //         return response.data;
            //     },
            //     error => {
            //         commit('registerFailure');
            //         return error;
            //     }
            // );
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    },
    getters: {
        user : state => {
            return state.user
        },
        status : state => {
            return state.status
        }
    }
};
