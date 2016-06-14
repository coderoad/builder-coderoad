"use strict";
var ReactDOM = require('react-dom');
var Root = {
    root: null,
    init: function () {
        this.root = document.createElement('div');
        this.root.setAttribute('id', 'crb');
        return this.root;
    },
    unmount: function () {
        ReactDOM.unmountComponentAtNode(this.root);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
