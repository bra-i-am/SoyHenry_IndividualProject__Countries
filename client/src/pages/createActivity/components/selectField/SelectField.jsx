import "./selectfield.scss";

function SelectField({ name, id, stateLinked, handler, options }) {
	const { func, setterState, state } = handler;

	return (
		<div className="selectFiel__container">
			<label htmlFor={id}>{name}</label>
			<select
				name={id}
				id={id}
				value={stateLinked}
				onChange={(e) => func(e, setterState, state)}
			>
				{options.map((el) => (
					<option key={el} value={el}>
						{el}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectField;
