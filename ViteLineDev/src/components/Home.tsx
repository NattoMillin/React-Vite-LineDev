
import { useForm } from 'react-hook-form';
import { Input } from './Input';

export type FormValues = {
    FirstName: string;
};
function Home() {
    const { handleSubmit, formState: { errors }, control } = useForm<FormValues>({
        defaultValues: {
            FirstName: ''
        },
        mode: 'onChange'
    });
    const onSubmit = (data: FormValues) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="FirstName" rules={{ required: true }} />
            {errors.FirstName && 'First name is required'}
            <input type="submit" />
        </form>
    );
}

export default Home;