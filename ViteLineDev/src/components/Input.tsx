import { useController, UseControllerProps } from 'react-hook-form';
import { FormValues } from './Home';

export const Input = (props: UseControllerProps<FormValues>) => {
    const { field, fieldState } = useController(props);
    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && 'Touched'}</p>
            <p>{fieldState.isDirty && '変更されました。'}</p>
            <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
        </div>
    );
};