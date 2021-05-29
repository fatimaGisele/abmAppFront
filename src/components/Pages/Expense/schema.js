import * as yup from 'yup';

export const schema = yup.object().shape({
    concept: yup.string().min(4).required(),
    amount: yup.number().required(),
    date: yup.date().required()
});