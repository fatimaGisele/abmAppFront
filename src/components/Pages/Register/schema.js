import * as yup from 'yup';

export const schema = yup.object().shape({
    user: yup.string().required(),
    mail: yup.string().email().required(),
    password: yup.string().required()
});