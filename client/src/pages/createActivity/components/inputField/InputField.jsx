import "./inputfield.scss";

function InputField({
	placeholder,
	text,
	id,
	type,
	value,
	handler,
	max,
	min,
	dataList,
}) {
	const { func, setterState, setterError, state, errors, countries } = handler;

	return (
		<div className="inputField__container">
			<label className="inputField__container__label" htmlFor={id}>
				{text}
			</label>
			<input
				className="inputField__container__input"
				name={id}
				id={id}
				type={type}
				placeholder={placeholder}
				value={value && value}
				onChange={(e) =>
					func(e, setterState, state, setterError, errors, countries)
				}
				max={max && max}
				min={min && min}
				list={dataList && `${text}List`}
			/>

			{dataList ? (
				<datalist id={`${text}List`}>
					{dataList.map((el, idx) => (
						<option key={`${el}${idx}`} value={el} />
					))}
				</datalist>
			) : (
				""
			)}
		</div>
	);
}

export default InputField;
