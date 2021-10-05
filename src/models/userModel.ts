export interface UserDto {
  id: number;
  email: string;
  name: string;
}

export interface UserRegisterModel {
  confirmPassword?: string;
  email: string;
  name: string;
  password: string;
}

export interface UserLoginModel {
  email: string;
  password: string;
}
