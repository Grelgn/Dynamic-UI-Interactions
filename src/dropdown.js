module.exports = function dropDown() {
	const menu = document.querySelectorAll(".dropdown-menu");
	menu.forEach((element) => {
		const dropdown = element.querySelector(".dropdown");
		element.addEventListener("mouseenter", () => {
			dropdown.classList.add("visible");
		});
		element.addEventListener("mouseleave", () => {
			dropdown.classList.remove("visible");
		});
	});
};
