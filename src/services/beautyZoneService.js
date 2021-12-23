import request from './requester.js';

request.settings.host = 'http://localhost:3030'
const endpoints = {
    getAllProcedures: '/data/procedures',
    getOneProcedures: (id) => `/data/procedures/${id}`,
    createBooking: '/data/bookings',
    editBooking: (id) => `/data/bookings/${id}`,
    getOneById: (id) => `/data/bookings/${id}`,
    getMyBooking: (userId) => `/data/bookings?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
}

export async function getAll(){
    const result = await request.get(endpoints.getAllProcedures);
    return Object.values(result);
}
export async function getProcedureById(id){
    const result = await request.get(endpoints.getOneProcedures(id));
    return result;
}

export async function getOneById(id){
    const result = await request.get(endpoints.getOneById(id));
    return result;
}
export async function createUserBooking(data){
    const result = await request.post(endpoints.createBooking, data);
    return result;
}

export async function getMyBooking(userId){
    const result = await request.get(endpoints.getMyBooking(userId));
    return Object.values(result);
}

export async function editUserBooking(id, data){
    const result = await request.put(endpoints.editBooking(id), data);
    return result;
}

export async function deleteUserBooking(id){
    const result = await request.del(endpoints.getOneById(id));
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
    createUserBooking,
    getMyBooking,
    editUserBooking,
    getOneById,
    deleteUserBooking,
    getProcedureById
}