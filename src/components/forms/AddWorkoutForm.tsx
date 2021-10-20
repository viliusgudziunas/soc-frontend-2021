import { Button } from '@lib/Button';
import { DateField, TextField } from '@lib/formFields';
import { AddWorkoutModel } from '@shared/types';
import Utils from '@shared/utils';
import { Form, Formik, FormikHelpers } from 'formik';
import { ReactElement, useState } from 'react';

interface Props {
  handleSubmitFormFunc: (data: AddWorkoutModel) => void;
}

const initialFormData: AddWorkoutModel = {
  name: '',
  caloriesBurnt: 0,
  timeSpent: '',
  workoutDate: Utils.getTodaysDate(),
};

interface FormErrors {
  name?: string;
  caloriesBurnt?: string;
  timeSpent?: string;
  workoutDate?: string;
}

export const AddWorkoutForm = (props: Props): ReactElement => {
  const { handleSubmitFormFunc } = props;
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const minDate = '2021-10-01';
  const maxDate = '2021-10-31';

  const handleValidate = (values: AddWorkoutModel): FormErrors => {
    const errors: FormErrors = {};
    const { name, caloriesBurnt, timeSpent, workoutDate } = values;

    if (!name) {
      errors.name = 'Field required';
    }
    if (!caloriesBurnt) {
      errors.caloriesBurnt = 'Field required';
    }
    if (!timeSpent) {
      errors.timeSpent = 'Field required';
    }
    if (!workoutDate) {
      errors.workoutDate = 'Field required';
    }

    const isErrorsEmpty = Object.keys(errors).length === 0;
    setSubmitDisabled(!isErrorsEmpty);

    return errors;
  };

  const handleSubmit = (
    values: AddWorkoutModel,
    actions: FormikHelpers<AddWorkoutModel>
  ): void => {
    handleSubmitFormFunc(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialFormData}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {/* TODO: find type for props below */}
      {() => (
        <Form className='flex flex-col'>
          <TextField attribute='name' required>
            Exercise
          </TextField>
          <TextField attribute='caloriesBurnt' required type='number'>
            Calories burnt
          </TextField>
          <TextField attribute='timeSpent' required type='time'>
            Time spent
          </TextField>
          <DateField
            attribute='workoutDate'
            max={maxDate}
            min={minDate}
            required
          >
            Date
          </DateField>

          <Button type='submit' disabled={submitDisabled}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
