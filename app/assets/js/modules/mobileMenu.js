import $ from "jquery";

class MobileMenu {
	constructor() {
		this.siteHeader = $(".header");
		this.menuIcon = $(".header__menu-icon");
		this.menuContent = $(".header__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("header__menu-content--is-visible");
		this.siteHeader.toggleClass("header--is-expanded");
	}
}

export default MobileMenu;