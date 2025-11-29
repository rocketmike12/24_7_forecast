import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Weather } from "./components/Weather/Weather";
import { News } from "./components/News/News";
import { Footer } from "./components/Footer/Footer";

import { AuthModal } from "./components/AuthModal/AuthModal";

export const App = function () {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<AuthModal open={modalOpen} />

			<Header />
			<Hero />
			<Weather />
			<News />
			<Footer />
		</>
	);
};
