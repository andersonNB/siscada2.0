import {BrowserRouter} from "react-router-dom";
import {SiscadaRoutes} from "./components/Routes";
// import './App.css'

function SiscadaApp() {
	return (
		<div className="App">
			<BrowserRouter>
				<SiscadaRoutes />
			</BrowserRouter>
		</div>
	);
}

export default SiscadaApp;
