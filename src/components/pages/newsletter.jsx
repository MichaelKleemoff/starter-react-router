import { useNavigate, Navigate } from 'react-router-dom';

export default function NewsLetter() {
	const navigate = useNavigate();

	function takeMeHome() {
		alert(
			'You will now get our newsletters hourly! Taking you back to the home page now'
		);
		navigate('/');
	}

	return (
		<section>
			<h3>Sign Up For Our Newsletter</h3>
			<button onClick={takeMeHome}>Sign me up for hourly updates!</button>
		</section>
	);
}
