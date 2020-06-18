import React from "react";
import pic from "./img/pic.jpg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<img src={pic} className="Pic"></img>
			<h1 style={{ color: "white" }}>Welcome to my website</h1>
		</div>
	);
}

export default App;
