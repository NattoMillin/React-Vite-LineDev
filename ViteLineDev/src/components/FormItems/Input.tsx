import { useController, UseControllerProps } from 'react-hook-form';
import { FormValues } from '../Home';

type ItemTypes = {
    Items? :string[]
}

export const Input = (props: ItemTypes & UseControllerProps<FormValues>) => {
    const { field, fieldState } = useController(props);
    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && 'Touched'}</p>
            <p>{fieldState.isDirty && 'Dirty'}</p>
            <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
        </div>
    );
};
