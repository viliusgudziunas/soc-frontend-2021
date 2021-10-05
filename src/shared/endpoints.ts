const isProduction = process.env.ENV === 'production';
const prefix = isProduction ? process.env.API : '';

export const endpoints = {
  auth: { login: `${prefix}/login`, logout: `${prefix}/logout` },
  users: { create: `${prefix}/users` },
  workouts: { create: `${prefix}/workouts` },
};
