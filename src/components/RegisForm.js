import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegisForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			title: '',
			marriageStatus: '',
			dateOfBirth: new Date(),
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
			<label htmlFor='dateOfBirth'>Date of Birth</label>
			<DatePicker
				selected={formik.values.dateOfBirth}
				dateFormat='MMMM d, yyyy'
				name='dateOfBirth'
				onChange={formik.handleChange}
			/>
			<label htmlFor='placeOfBirth'>Place of Birth</label>
			<input
				value={formik.values.placeOfBirth}
				onChange={formik.handleChange}
				id='placeOfBirth'
				type='text'
				placeholder='Enter your place of birth'
			/>
			<label htmlFor='address'>Address</label>
			<input
				value={formik.values.address}
				onChange={formik.handleChange}
				id='address'
				type='text'
				placeholder='Enter your address'
			/>
			<label htmlFor='phoneNumber'>Phone Number</label>
			<input
				value={formik.values.phoneNumber}
				onChange={formik.handleChange}
				id='phoneNumber'
				type='text'
				placeholder='Enter your phone number'
			/>
			<label htmlFor='email'>Email Address</label>
			<input
				value={formik.values.email}
				onChange={formik.handleChange}
				id='email'
				type='email'
				placeholder='Enter your email address'
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};
export default RegisForm;
