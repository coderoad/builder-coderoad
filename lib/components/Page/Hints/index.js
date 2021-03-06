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
var actions_1 = require('../../../actions');
var List_1 = require('material-ui/List');
var styles = {
    text: {
        margin: '10px 15px',
    },
};
var Hints = (function (_super) {
    __extends(Hints, _super);
    function Hints(props) {
        _super.call(this, props);
        this.state = {
            text: '',
        };
    }
    Hints.prototype.render = function () {
        var _this = this;
        var _a = this.props, hints = _a.hints, editorMarkdownOpen = _a.editorMarkdownOpen;
        var text = this.state.text;
        return (React.createElement(List_1.List, null, !hints || !hints.length
            ? []
            : hints.map(function (hint, index) { return (React.createElement(List_1.ListItem, {key: index, secondaryText: React.createElement("p", null, 
                index + 1, 
                ". ", 
                hint), onClick: editorMarkdownOpen.bind(_this, hint, null)})); })));
    };
    Hints.prototype.handleChange = function (event) {
        this.setState({
            text: event.target.value,
        });
    };
    Hints = __decorate([
        react_redux_1.connect(null, { editorMarkdownOpen: actions_1.editorMarkdownOpen }), 
        __metadata('design:paramtypes', [Object])
    ], Hints);
    return Hints;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hints;
