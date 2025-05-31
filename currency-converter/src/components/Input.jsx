import { useId } from "react";

function Input({
	label,
	amount,
	currency,
	onAmountChange,
	onCurrencyChange,
	currencies,
	disabled = false,
}) {
	const amountInputId = useId();
	const currId = useId();

	return (
		<div className="bg-white w-lg flex p-6 justify-between rounded-md">
			<div className="flex flex-col gap-2.5">
				<label htmlFor={amountInputId} className="text-gray-400">
					{label}
				</label>
				<input
					type="number"
					id={amountInputId}
					value={amount}
					onChange={(e) => {
						onAmountChange && onAmountChange(e.target.value);
					}}
					min="0"
					className="outline-none font-medium text-sm"
					disabled={disabled}
				/>
			</div>

			<div className="flex flex-col gap-2.5">
				<label htmlFor={currId} className="text-gray-400">
					Currency Type
				</label>
				<select
					id={currId}
					value={currency}
					onChange={(e) => {
						onCurrencyChange && onCurrencyChange(e.target.value);
					}}
					className="outline-none font-medium text-sm bg-blue-50 p-1 rounded-md">
					{currencies.map((cur) => (
						<option key={cur} value={cur}>
							{cur}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default Input;
