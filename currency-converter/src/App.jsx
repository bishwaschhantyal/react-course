import { useState } from "react";
import { Input } from "./components/index";
import { ArrowUpDown } from "lucide-react";
import { useCurrencyList, useExchangeRate } from "./hooks";

function App() {
	const currOptions = useCurrencyList();

	const [amount, setAmount] = useState(0);
	const [toCurrency, setToCurrency] = useState("npr");
	const [fromCurrency, setFromCurrency] = useState("usd");

	const rate = useExchangeRate(fromCurrency, toCurrency);

	const convertedAmount = Number((amount * rate).toFixed(2));

	const swap = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
	};

	return (
		<>
			<div className="w-full h-screen bg-[url(assets/pexels-minan1398-1629172.jpg)] bg-center bg-cover flex items-center justify-center">
				<div className="relative bg-back-color rounded-lg border-white border-2 px-8 py-2 space-y-2.5 flex justify-center items-center flex-col">
					<h1 className="text-3xl font-bold text-amber-50">
						Currency converter
					</h1>
					<Input
						label={"From"}
						amount={amount}
						currency={fromCurrency}
						onAmountChange={setAmount}
						onCurrencyChange={setFromCurrency}
						currencies={currOptions}
					/>
					<ArrowUpDown
						onClick={swap}
						className="text-white cursor-pointer bg-blue-700 rounded-md absolute top-39"></ArrowUpDown>
					<Input
						label={"To"}
						amount={convertedAmount}
						currency={toCurrency}
						onAmountChange={setAmount}
						onCurrencyChange={setToCurrency}
						currencies={currOptions}
						disabled
					/>

					<button className="bg-blue-700 w-full py-2 text-amber-50 rounded-md cursor-pointer">
						Convert {fromCurrency.toUpperCase()} To {toCurrency.toUpperCase()}
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
