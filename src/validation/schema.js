import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'name must be at least 2 characters'),
    size: yup
        .string()
        .trim()
        .required('size is required'),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    olives: yup.boolean(),
    jalapeños: yup.boolean(),
    spinach: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default schema;