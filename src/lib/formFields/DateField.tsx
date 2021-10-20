import { ErrorMessage, Field } from 'formik';
import { ReactElement, useEffect, useState } from 'react';

interface Props {
  attribute: string;
  children: string;
  max?: string;
  min?: string;
  required?: boolean;
}

export const DateField = (props: Props): ReactElement => {
  const { attribute, children, required, min, max } = props;

  const [label, setLabel] = useState(children);

  useEffect(() => {
    if (required) {
      setLabel(`${children} *`);
    }
  }, []);

  return (
    <label htmlFor={attribute} className='mb-4 text-sm font-bold'>
      {label}
      <Field
        className='mt-1 block rounded shadow leading-tight'
        id={attribute}
        max={max}
        min={min}
        name={attribute}
        required={required}
        type='date'
      />
      <ErrorMessage name={attribute} component='div' className='text-red-500' />
    </label>
  );
};

DateField.defaultProps = {
  max: undefined,
  min: undefined,
  required: false,
} as Partial<Props>;
