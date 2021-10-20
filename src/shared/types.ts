export interface UserDto {
  createdOn: string;
  email: string;
  name: string;
  totalCalories: number;
}

export interface AddWorkoutModel {
  name: string;
  caloriesBurnt: number;
  timeSpent: string;
  workoutDate: string;
}
