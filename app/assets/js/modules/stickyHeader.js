import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
	constructor() {
		this.siteHeader = $(".header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("header--dark");
				} else {
					that.siteHeader.removeClass("header--dark");
				}
			}
		});
	}
}

export default StickyHeader;