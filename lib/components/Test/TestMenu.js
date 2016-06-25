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
var Card_1 = require('material-ui/Card');
var styles = {
    card: {
        margin: '5px',
    },
    title: {
        textAlign: 'center',
    },
    buttons: {
        textAlign: 'center',
    },
};
var TestMenu = (function (_super) {
    __extends(TestMenu, _super);
    function TestMenu() {
        _super.apply(this, arguments);
    }
    TestMenu.prototype.render = function () {
        return (React.createElement(Card_1.Card, {style: styles.card, initiallyExpanded: true}, 
            React.createElement(Card_1.CardTitle, {title: 'Test Menu', style: styles.title}), 
            React.createElement(Card_1.CardText, {expandable: true}, 
                React.createElement("p", null, "Try out a solution against your tests")
            )));
    };
    TestMenu = __decorate([
        react_redux_1.connect(null, null), 
        __metadata('design:paramtypes', [])
    ], TestMenu);
    return TestMenu;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestMenu;
