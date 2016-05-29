"use strict";
var render_1 = require('./components/render');
var root_1 = require('./components/root');
var polyfills_1 = require('core-coderoad/lib/polyfills');
var subscriptions_1 = require('./subscriptions');
var store_1 = require('./store');
var setup_1 = require('core-coderoad/lib/setup');
var Main = (function () {
    function Main() {
        polyfills_1.default();
        store_1.default.dispatch(setup_1.setupVerify());
        this.root = root_1.default.init();
    }
    Main.prototype.activate = function () {
        atom.workspace.addRightPanel({
            item: this.root,
            priority: 0,
        });
        subscriptions_1.onActivate();
        render_1.default(this.root);
    };
    Main.prototype.deactivate = function () {
        subscriptions_1.onDeactivate();
    };
    return Main;
}());
;
module.exports = new Main();
