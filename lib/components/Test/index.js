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
var TopPanel_1 = require('../TopPanel');
var styles = {
    page: {
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
    },
    card: {
        margin: '5px',
    },
};
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        _super.apply(this, arguments);
    }
    Test.prototype.componentDidMount = function () {
        TopPanel_1.topElement.toggle(true);
    };
    Test.prototype.render = function () {
        return (React.createElement("section", {style: styles.page, className: 'cr-page'}, 
            React.createElement(Card_1.Card, {style: styles.card, initiallyExpanded: true}, 
                React.createElement(Card_1.CardTitle, null, "Test"), 
                React.createElement(Card_1.CardText, {expandable: true}, "test test"))
        ));
    };
    Test = __decorate([
        react_redux_1.connect(null, {}), 
        __metadata('design:paramtypes', [])
    ], Test);
    return Test;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Test;
;
