import {useForm} from 'react-hook-form';
import {Form, Button} from 'react-bootstrap';
import {schema} from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { usePost } from './../../../customHook/useHTTP';

const Expense = () => {

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const [post, info, fetching] = usePost();

    const submitMyExpense = (data) => {
        console.log(data);
    };

    const add = () => {};
    const substract = () => {};

    return ( 
        <>
        <Form onSubmit={handleSubmit(submitMyExpense)} className='m-5'>
            <Form.Group>
                <Form.Label>Concepto</Form.Label>
                <Form.Control name='concept' placeholder='En concepto de...'
                 {...register('concept', {
                    required: 'Required',
                  })}/>
                   {errors.concept && (
                <span className="text-danger">{errors.concept.message}</span>
              )}
            </Form.Group>
            <Form.Group>
                <Form.Label>Monto</Form.Label>
                <Form.Control name='amount' placeholder='000000'
                 {...register('amount', {
                    required: 'Required',
                  })}/>
                   {errors.amount && (
                <span className="text-danger">{errors.amount.message}</span>
              )}
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha</Form.Label>
                <Form.Control name='date' placeholder='dd/mm/YYYY'
                 {...register('date', {
                    required: 'Required',
                  })}/>
                   {errors.date && (
                <span className="text-danger">{errors.date.message}</span>
              )}
            </Form.Group>
            <Button type='submit' onClick='add' variant='primary' className='m-3'>Agregar</Button>
            <Button type='submit' onClick='substract' variant='danger' className='m-3'>Restar</Button>
            
        </Form>
        </>
     );
}
 
export default Expense;