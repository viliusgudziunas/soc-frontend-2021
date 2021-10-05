import { UserLoginModel, UserRegisterModel } from '@models/userModel';
import { endpoints } from '@shared/endpoints';
import { AddWorkoutModel, UserDto } from '@shared/types';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ResponseWithDataDto {
  status: 'success' | 'fail';
  data: {
    // * Success
    authToken?: string;
    user?: UserDto;

    // * Fail
    fields?: string[];
    reason?: string;
  };
}

export interface LogoutResponseDto {
  status: 'success' | 'fail';
  message: string;
}

export const ApiService = {
  addUser: (
    data: UserRegisterModel
  ): Promise<AxiosResponse<ResponseWithDataDto>> => {
    const endpoint = endpoints.users.create;
    const body = data;

    return axios.post<UserRegisterModel, AxiosResponse<ResponseWithDataDto>>(
      endpoint,
      body
    );
  },

  login: (
    data: UserLoginModel
  ): Promise<AxiosResponse<ResponseWithDataDto>> => {
    const endpoint = endpoints.auth.login;
    const body = data;

    return axios.post<UserLoginModel, AxiosResponse<ResponseWithDataDto>>(
      endpoint,
      body
    );
  },

  logout: (
    authToken: string | null
  ): Promise<AxiosResponse<LogoutResponseDto>> => {
    const endpoint = endpoints.auth.logout;
    const body = {};
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${authToken}` },
    };

    return axios.post<object, AxiosResponse<LogoutResponseDto>>(
      endpoint,
      body,
      config
    );
  },

  addWorkout: (
    data: AddWorkoutModel,
    authToken: string | null
  ): Promise<AxiosResponse<ResponseWithDataDto>> => {
    const endpoint = endpoints.workouts.create;
    const body = data;
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${authToken}` },
    };

    return axios.post<AddWorkoutModel, AxiosResponse<ResponseWithDataDto>>(
      endpoint,
      body,
      config
    );
  },
};
