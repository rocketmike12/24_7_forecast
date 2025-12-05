import { createContext, useState } from "react";

import axios from "axios";

export const AuthContext = createContext(null);

axios.defaults.baseURL = import.meta.env.VITE_ENV === "dev" ? "/api/v0" : import.meta.env.VITE_USERS_API;

export const AuthProvider = ({ children }) => {
	axios
		.post("/auth/session", "", { withCredentials: true })
		.then((res) => {
			setIsLogin(true);
			setUsername(res.data);
		})

		.catch((err) => {
			console.error(err);
		});

	const [isLogin, setIsLogin] = useState(false);
	const [username, setUsername] = useState(null);
	return <AuthContext.Provider value={{ isLogin, setIsLogin, username, setUsername }}>{children}</AuthContext.Provider>;
};
