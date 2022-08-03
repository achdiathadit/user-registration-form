import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import { regisSchema } from '../schema';
import 'react-datepicker/dist/react-datepicker.css';

const onSubmit = async (values, actions) => {
	console.log(values);
	console.log(actions);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

const RegisForm = () => {
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleChange,
		handleSubmit,
		handleReset,
		setFieldValue,
	} = useFormik({
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
		validationSchema: regisSchema,
		onSubmit,
	});
	console.log(errors);
	console.log(touched);
	return (
		<div className='card'>
			<form onSubmit={handleSubmit} autoComplete='off'>
				<label htmlFor='name'>Name</label>
				<input
					value={values.name}
					onChange={handleChange}
					id='name'
					type='text'
					placeholder='Enter your name'
					className={errors.name && touched.name ? 'input-error' : ''}
				/>
				{errors.name && touched.name && <p className='error'>{errors.name}</p>}
				<label htmlFor='dateOfBirth'>Date of Birth</label>
				<DatePicker
					selected={values.dateOfBirth}
					dateFormat='MMMM d, yyyy'
					name='dateOfBirth'
					onChange={(date) => setFieldValue('dateOfBirth', date)}
					className={
						errors.dateOfBirth && touched.dateOfBirth ? 'input-error' : ''
					}
					showMonthDropdown
					showYearDropdown
					dropdownMode='select'
				/>
				{errors.placeOfBirth && touched.placeOfBirth && (
					<p className='error'>{errors.placeOfBirth}</p>
				)}
				<label htmlFor='placeOfBirth'>Place of Birth</label>
				<input
					value={values.placeOfBirth}
					onChange={handleChange}
					id='placeOfBirth'
					type='text'
					placeholder='Enter your place of birth'
					className={
						errors.placeOfBirth && touched.placeOfBirth ? 'input-error' : ''
					}
				/>
				{errors.placeOfBirth && touched.placeOfBirth && (
					<p className='error'>{errors.placeOfBirth}</p>
				)}
				<label htmlFor='address'>Address</label>
				<input
					value={values.address}
					onChange={handleChange}
					id='address'
					type='text'
					placeholder='Enter your address'
					className={errors.address && touched.address ? 'input-error' : ''}
				/>
				{errors.address && touched.address && (
					<p className='error'>{errors.address}</p>
				)}
				<label htmlFor='phoneNumber'>Phone Number</label>
				<input
					value={values.phoneNumber}
					onChange={handleChange}
					id='phoneNumber'
					type='tel'
					placeholder='Enter your phone number'
					className={
						errors.phoneNumber && touched.phoneNumber ? 'input-error' : ''
					}
				/>
				{errors.phoneNumber && touched.phoneNumber && (
					<p className='error'>{errors.phoneNumber}</p>
				)}
				<label htmlFor='email'>Email Address</label>
				<input
					value={values.email}
					onChange={handleChange}
					id='email'
					type='email'
					placeholder='Enter your email address'
					className={errors.email && touched.email ? 'input-error' : ''}
				/>
				{errors.email && touched.email && (
					<p className='error'>{errors.email}</p>
				)}
				<button type='submit' disabled={isSubmitting}>
					Submit
				</button>
				<button onClick={handleReset}>Reset</button>
			</form>
		</div>
	);
};
export default RegisForm;
