export interface UserDto {
  // TODO: introduce Moment.js here
  createdOn: string;
  email: string;
  name: string;
  totalCalories: number;
}

// * Need to create a standings table in backend and every time new calories are
// * added, I should update the standings table

export interface AddWorkoutModel {
  name: string;
  caloriesBurnt: number;
  timeSpent: string;
  workoutDate: string;
}
