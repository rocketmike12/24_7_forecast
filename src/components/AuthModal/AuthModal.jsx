import { RegisterModal } from "./RegisterModal";
import { LoginModal } from "./LoginModal";

import styles from "./AuthModal.module.scss";

export const AuthModal = function ({ isOpen, role, setRole, closeModal }) {
	const handleClose = function (e) {
		if (e.type === "keydown" && e.code === "Escape") closeModal();
		if (e.type === "click" && e.target === e.currentTarget) closeModal();
	};

	document.addEventListener("keydown", handleClose);

	return (
		<>
			<div id="overlay" onClick={handleClose} className={`${styles["overlay"]} ${isOpen ? "" : styles["hidden"]}`}>
				{role == "register" && <RegisterModal setRole={setRole} closeModal={closeModal} handleClose={handleClose} />}
				{role == "login" && <LoginModal setRole={setRole} closeModal={closeModal} handleClose={handleClose} />}
			</div>
		</>
	);
};
