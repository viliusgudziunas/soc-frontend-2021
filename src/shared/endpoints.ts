const isDevelopment = process.env.NODE_ENV === 'development';
const prefix = isDevelopment ? '' : '/api';

export const endpoints = {
  auth: { login: `${prefix}/login`, logout: `${prefix}/logout` },
  standings: { get: `${prefix}/standings` },
  users: { create: `${prefix}/users` },
  workouts: { create: `${prefix}/workouts` },
};
