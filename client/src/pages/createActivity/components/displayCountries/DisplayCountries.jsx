import "./displaycountries.scss";

function DisplayCountries({ countries, handler }) {
	const { func, setterState, state } = handler;

	return (
		<>
			{countries.length ? (
				<div className="displayCountries__container">
					<h2>Countries selected</h2>
					{countries.map((el, idx) => (
						<div
							className="displayCountries__container__country"
							key={`${el}${idx}`}
						>
							<button
								className="displayCountries__container__country--delete"
								name={el}
								onClick={(e) => func(e, setterState, state)}
							>
								X
							</button>
							<p className="displayCountries__container__country--name">{el}</p>
						</div>
					))}
				</div>
			) : (
				""
			)}
		</>
	);
}

export default DisplayCountries;
