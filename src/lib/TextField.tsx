import { ErrorMessage, Field } from 'formik';
import { ReactElement, useEffect, useState } from 'react';

type InputType = 'text' | 'email' | 'password' | 'number' | 'time' | 'date';

interface Props {
  attribute: string;
  children: string;
  required?: boolean;
  type?: InputType;
}

export const TextField = (props: Props): ReactElement => {
  const { attribute, children, type, required } = props;

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
        id={attribute}
        name={attribute}
        required={required}
        type={type}
        className='mt-1 block rounded shadow leading-tight'
      />
      <ErrorMessage name={attribute} component='div' className='text-red-500' />
    </label>
  );
};

TextField.defaultProps = { required: false, type: 'text' } as Partial<Props>;
