"use strict";
var React = require('react');
var path_1 = require('path');
var index_1 = require('../../index');
var imagePath = path_1.join(__dirname, '../../../../', 'img', 'coderoad.jpg');
var styles = {
    header: {
        backgroundImage: "url(\"" + imagePath + "\")",
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'inherit',
        height: '350px',
        textAlign: 'center',
        marginTop: '0px',
        textShadow: '1px 1px 1px #000',
    },
    title: {
        paddingTop: '120px',
        color: 'white',
        fontSize: '2em',
    },
    tagline: {
        fontSize: '1.5em',
    },
    button: {
        fontSize: '1.4em',
        boxShadow: '2px 2px 1px #888888',
        textShadow: '1px 1px 0px #000',
    },
};
var Welcome = function () { return (React.createElement("div", {style: styles.header, className: 'cr-bg'}, 
    React.createElement("div", {style: styles.title}, "CodeRoad Builder"), 
    React.createElement("div", {style: styles.tagline}, "Create Tutorials"), 
    React.createElement("br", null), 
    React.createElement("br", null), 
    React.createElement(index_1.RouteButton, {label: 'Start', route: 'tutorialConfig', style: styles.button}))); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Welcome;
