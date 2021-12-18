import request from './requester.js';

const baseUrl = 'http://localhost:3030/data/procedures';

export async function getAll(){
    const result = await request.get(baseUrl);
    return result;
}