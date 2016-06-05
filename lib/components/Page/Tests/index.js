"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var path_1 = require('path');
var actions_1 = require('../../../actions');
var config_options_1 = require('../../../config-options');
var FlatButton_1 = require('material-ui/FlatButton');
var styles = {
    button: {
        bottom: '8px',
    },
};
var Tests = (function (_super) {
    __extends(Tests, _super);
    function Tests() {
        _super.apply(this, arguments);
    }
    Tests.prototype.render = function () {
        var _this = this;
        var _a = this.props, tests = _a.tests, config = _a.config, style = _a.style, open = _a.open;
        var suffix = config_options_1.default[config.language].suffix;
        return (React.createElement("div", {style: style}, tests.map(function (test) { return (React.createElement(FlatButton_1.default, {style: styles.button, onClick: open.bind(_this, test.concat('.' + suffix)), label: 'Test', secondary: true})); })));
    };
    Tests = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                open: function (file) {
                    dispatch(actions_1.editorOpen(path_1.join('tutorial', file)));
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], Tests);
    return Tests;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tests;
