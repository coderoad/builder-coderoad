"use strict";
var React = require('react');
var AppBar_1 = require('material-ui/AppBar');
var CloseWindow_1 = require('./CloseWindow');
var menuRight_1 = require('./menuRight');
var styles = {
    zIndex: '1',
};
var AppMenu = function (_a) {
    var route = _a.route;
    return (React.createElement(AppBar_1.default, {title: 'CodeRoad', className: 'cr-menu-bar', style: { styles: styles }, iconElementLeft: React.createElement(CloseWindow_1.default, null), iconElementRight: menuRight_1.default(route)}));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppMenu;
