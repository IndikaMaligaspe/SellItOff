import client from './client';

const endpoint = "/expoPushTokens";

const register = (pushTokens) => client.post(endpoint, {token: pushTokens});

export default {
    register,
};