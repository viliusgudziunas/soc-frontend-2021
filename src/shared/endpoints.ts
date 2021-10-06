const prefix = '/api';

export const endpoints = {
  auth: { login: `${prefix}/login`, logout: `${prefix}/logout` },
  users: { create: `${prefix}/users` },
  workouts: { create: `${prefix}/workouts` },
};
