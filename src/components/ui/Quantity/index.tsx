import styles from "./styles.module.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";
import classNames from "classnames";

interface QuantityControlProps
	extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
	value?: number;
	limit?: number;
	onIncrement?: (counter: number) => void;
	onDecrement?: (counter: number) => void;
	onChange?: (counter: number) => void;
}

function Quantity(props: QuantityControlProps) {
	const {
		limit,
		onDecrement,
		onIncrement,
		onChange,
		className,
		value,
		...rest
	} = props;

	const [counter, setCounter] = useState(value ?? 1);

	const handleIncrement = () => {
		setCounter((counter) => ++counter);
		if (onIncrement) onIncrement(counter);
	};

	const handleDecrement = () => {
		setCounter((counter) => --counter);
		if (onDecrement) onDecrement(counter);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCounter(event.currentTarget.valueAsNumber);
		if (onDecrement) onDecrement(counter);
	};

	// Atualiza o valor
	useEffect(() => {
		// Impede que o contador chegue a zero
		if (counter <= 0) setCounter(1);

		// Impede que o contador passe do limite (se ele existir)
		if (limit) {
			if (counter > limit) {
				setCounter(limit);
				return;
			}
		}

		// Executa o onchange passado
		if (onChange) onChange(counter);
	}, [counter]);

	// Atribui valor padrão após devidas checagens
	useEffect(() => {
		if (typeof value !== "undefined") {
			if (value <= 0) {
				setCounter(1);
				return;
			}

			if (limit) {
				if (value > limit) setCounter(limit);
			}

			setCounter(value);
		}
	}, [value]);

	const classList = classNames(styles.container, className);

	return (
		<div className={classList}>
			<button className={styles.button} onClick={handleDecrement}>
				<FiMinus />
			</button>

			<input
				className={styles.inputNumber}
				value={counter}
				onChange={handleChange}
				min={1}
				type="number"
				{...rest}
			/>

			<button className={styles.button} onClick={handleIncrement}>
				<FiPlus />
			</button>
		</div>
	);
}

export { Quantity };
