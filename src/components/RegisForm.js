import { useFormik } from 'formik';

const RegisForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			title: '',
			marriageStatus: '',
			dateOfBirth: '',
			placeOfBirth: '',
			address: '',
			phoneNumber: '',
			email: '',
			uploadedImages: '',
		},
	});
	return (
		<form autoComplete='off'>
			<label htmlFor='name'>Name</label>
			<input
				value={formik.values.name}
				onChange={formik.handleChange}
				id='name'
				type='text'
				placeholder='Enter your name'
			/>
		</form>
	);
};
export default RegisForm;
