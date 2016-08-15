/// <reference path="jquery.d.ts" />

namespace LolitaFramework {
    class MultilevelMenu {
        /**
         * Menu Object
         * @type {object}
         */
         $menu_container: any = null;

        /**
         * Menu Item Selector
         * @type {string}
         */
         $menu_item_selector: string = 'li';

        /**
         * Menu Items
         * @type {string}
         */
         $menu_items: any = [];

        /**
         * Sub Menu Selector
         * @type {string}
         */         
         $sub_menu_selector: string;

        /**
         * Back object
         * @type {object}
         */
         $back_object: any = null;

        /**
         * Constructor
         */
        constructor(menu_selector: string = null) {
        	if (menu_selector == null) {
        		console.log('%c You should provide the menu selector', 'color: red');
        		return;
        	}
        	this.$menu_container = jQuery(menu_selector);
        	if (this.$menu_container.length != 1) {
        		this.$menu_container = null;
        		console.log('%c There should me at least one menu', 'color: red');
        		return;
        	}
        	this.$menu_items = jQuery(menu_selector + '>' + this.$menu_item_selector);
        	if (this.$menu_items.length < 1) {
        		console.log('%c There should be at least one menu item', 'color: red');
        		return;        		
        	}

        	this.$menu_items.on('click', this.click);
        }

        /**
         * On Link Click
         */
        click() {
        	var link = jQuery(this).children('a');
        	var sub_menu = jQuery(this).children(this.$sub_menu_selector);

        	if (sub_menu.length == 0 && link.length == 0) {
        		console.log('%c There is no links or sub menus', 'color: red');
        		return;        		        		
        	} else if (sub_menu.length == 1) {
        		this.render_submenu(sub_menu);
        	} else {
        		window.location.href = link.attr('href');
        	}
        }

        /**
         * Render sub-menu
         */
        render_submenu(sub_menu: Object) {

        }

        /**
         * On Back
         */
        back() {

        }

    }

    (<any>window).LolitaFramework.multilevel_menu = new MultilevelMenu();
}