import "./displayerror.scss";

function DisplayError({ error }) {
	return (
		<div className="displayError__container">
			<p>{error}</p>
		</div>
	);
}

export default DisplayError;
