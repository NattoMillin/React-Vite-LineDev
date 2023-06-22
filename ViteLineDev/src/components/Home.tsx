import { useForm } from 'react-hook-form';
import { Input } from './FormItems/Input';
import { Options } from './FormItems/Select';

export type FormValues = {
    FirstName: string;
    SelectItem: string;
};
function Home() {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            FirstName: '',
            SelectItem:''
        },
        mode: 'onChange'
    });
    const items:string[] =["female","male"]
    const onSubmit = (data: FormValues) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="FirstName" rules={{ required: true }} />
            <Options Items={items} control={control} name="SelectItem" rules={{ required: true }} />
            <input type="submit" />
        </form>
    );
}
export default Home;
