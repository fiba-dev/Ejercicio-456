//Ejemplo de hooks
import React, { useEffect, useState, useRef } from "react";

const Ejemplo1 = () => {
	//valor inicial para un contador
	const valorInicial = 0;
	//valor inicial para una persona
	const personaInicial = {
		nombre: "Martìn",
		email: "emaildemartin@gmail.com",
	};
	const [contador, setContador] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	/**
	 * Funcion para actualizar el estado privado que contiene el contador
	 */
	function incrementarContador() {
		setContador(contador + 1);
	}
	/**
	 * Funcion para actualizar el estado privado que contiene una persona
	 */
	function actualizarPersona() {
		setPersona({
			nombre: "pepe",
			email: "emaildepepe@gmail.com",
		});
	}

	return (
		<div>
			<h1>***Ejemplo de USESTATE***</h1>
			<h2>CONTADOR:{contador}</h2>
			<h2>DATOS DE LA PERSONA</h2>
			<h3>NOMBRE:{persona.nombre}</h3>
			<h3>EMAIL:{persona.email}</h3>
			<button onClick={incrementarContador}>Incrementar Contador </button>
			<button onClick={actualizarPersona}>Actualizar Persona</button>
		</div>
	);
};

export default Ejemplo1;
