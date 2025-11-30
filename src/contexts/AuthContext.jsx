import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const [username, setUsername] = useState(null);
	return <AuthContext.Provider value={{ isLogin, setIsLogin, username, setUsername }}>{children}</AuthContext.Provider>;
};
