import React, { useState, useEffect, useRef } from "react";

const Ejemplo2 = () => {
	const [contador1, setContador1] = useState(0);
	const [contador2, setContador2] = useState(0);
	const miRef = useRef();
	function incrementar1() {
		setContador1(contador1 + 1);
	}
	function incrementar2() {
		setContador2(contador2 + 1);
	}
	useEffect(() => {
		console.log("MIREEF", miRef);
	});
	return (
		<div>
			<h1>EJEMPLO DE USEEFFECT USEREF</h1>
			<h2>Contador1: {contador1}</h2>
			<h2>Contador2: {contador2}</h2>
			<h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
			<div>
				<button onClick={incrementar1}>Incrementar Contador 1</button>
				<button onClick={incrementar2}>Incrementar Contador 2</button>
			</div>
		</div>
	);
};

export default Ejemplo2;
