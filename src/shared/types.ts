export interface UserDto {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  updatedAt: string;
}

export interface AddWorkoutModel {
  name: string;
  caloriesBurnt: number;
  timeSpent: string;
  workoutDate: string;
}
