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
var Tabs_1 = require('material-ui/Tabs');
var actions_1 = require('../../actions');
var PageTab = (function (_super) {
    __extends(PageTab, _super);
    function PageTab() {
        _super.apply(this, arguments);
    }
    PageTab.prototype.render = function () {
        var _a = this.props, page = _a.page, index = _a.index, pageSet = _a.pageSet;
        return (React.createElement(Tabs_1.Tab, {key: 'add', label: page.title.substring(0, 10), onTouchTap: pageSet.bind(this, index)}));
    };
    PageTab = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                pageSet: function (index) { return actions_1.pageSet(index); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], PageTab);
    return PageTab;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageTab;
