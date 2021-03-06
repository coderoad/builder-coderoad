"use strict";
var actions_1 = require('../../actions');
var types_1 = require('./types');
function tutorialInit() {
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, packageJson = _a.packageJson;
        dispatch({ type: types_1.TUTORIAL_INIT, payload: { dir: dir, name: packageJson.name } });
        dispatch(tutorialBuild());
        dispatch(tutorialLoad());
    };
}
exports.tutorialInit = tutorialInit;
function tutorialLoad() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_LOAD, payload: { dir: dir } });
    };
}
exports.tutorialLoad = tutorialLoad;
function tutorialBuild() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_BUILD, payload: { dir: dir } });
        if (!getState().updated) {
            dispatch(actions_1.tutorialUpdated(true));
        }
    };
}
exports.tutorialBuild = tutorialBuild;
function tutorialPageAdd() {
    return { type: types_1.TUTORIAL_PAGE_ADD };
}
exports.tutorialPageAdd = tutorialPageAdd;
function tutorialTaskAdd() {
    return function (dispatch, getState) {
        var pagePosition = getState().pagePosition;
        var taskPosition = getState().tutorial.pages[pagePosition].tasks.length || 0;
        dispatch({ type: types_1.TUTORIAL_TASK_ADD, payload: { pagePosition: pagePosition, taskPosition: taskPosition } });
    };
}
exports.tutorialTaskAdd = tutorialTaskAdd;
function tutorialActionAdd(taskPosition, tutorialAction) {
    return function (dispatch, getState) {
        var pagePosition = getState().pagePosition;
        dispatch({ type: types_1.TUTORIAL_ACTION_ADD, payload: { pagePosition: pagePosition, taskPosition: taskPosition, tutorialAction: tutorialAction } });
    };
}
exports.tutorialActionAdd = tutorialActionAdd;
function tutorialHintAdd(taskPosition, hint) {
    return function (dispatch, getState) {
        var pagePosition = getState().pagePosition;
        dispatch({ type: types_1.TUTORIAL_HINT_ADD, payload: { pagePosition: pagePosition, taskPosition: taskPosition, hint: hint } });
    };
}
exports.tutorialHintAdd = tutorialHintAdd;
function tutorialPublish(type) {
    return function (dispatch, getState) {
        dispatch({ type: types_1.TUTORIAL_PUBLISH, payload: { type: type } });
        dispatch(actions_1.tutorialUpdated(false));
    };
}
exports.tutorialPublish = tutorialPublish;
