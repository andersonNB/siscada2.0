
import { Route, Routes } from "react-router-dom";
import {LoginPage} from "../Login/LoginPage";

const SiscadaRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage/>} />
            <Route path="*" element={()=>{<h2>No match</h2>}} />
		</Routes>
	);
};

export default SiscadaRoutes;
