"use strict";
var redux_1 = require('redux');
var page_1 = require('./modules/page');
var alert_1 = require('core-coderoad/lib/alert');
var editor_1 = require('core-coderoad/lib/editor');
var route_1 = require('core-coderoad/lib/route');
var setup_1 = require('core-coderoad/lib/setup');
var tutorial_1 = require('core-coderoad/lib/tutorial');
var tutorials_1 = require('core-coderoad/lib/tutorials');
var window_1 = require('core-coderoad/lib/window');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.reducer, checks: setup_1.checks, editor: editor_1.reducer, dir: editor_1.dir,
    packageJson: setup_1.packageJson, page: page_1.page, pagePosition: page_1.pagePosition, route: route_1.reducer, tasks: page_1.tasks,
    tutorial: tutorial_1.reducer, tutorials: tutorials_1.reducer,
    taskActions: page_1.taskActions, taskTests: page_1.taskTests, windowToggle: window_1.reducer
});
