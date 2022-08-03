import * as yup from 'yup';

export const regisSchema = yup.object().shape({
	name: yup.string().min(5).required('This data is required'),
	title: yup.string().required('This data is required'),
	marriageStatus: yup.string().required('This data is required'),
	dateOfBirth: yup.date().required('This data is required'),
	placeOfBirth: yup.string().required('This data is required'),
	address: yup.string().required('This data is required'),
	phoneNumber: yup
		.number('Please enter a valid phone number')
		.positive()
		.integer()
		.min(10)
		.required('This data is required'),
	email: yup
		.string()
		.email('Please enter a valid email')
		.required('This data is required'),
	uploadedImages: yup.string().required('This data is required'),
});
