import request from './requester.js';

request.settings.host = 'http://localhost:3030'
const endpoints = {
    getAllProcedures: '/data/procedures',
    createBooking: '/data/bookings'
}

export async function getAll(){
    const result = await request.get(endpoints.getAllProcedures);
    return Object.values(result);
}

export async function createUserBooking(data){
    const result = await request.post(endpoints.createBooking, data);
    return result;
}

export const login = request.login;
export const register = request.register;
export const logout = request.logout;

export default {
    login,
    register,
    logout,
    getAll,
    createUserBooking
}