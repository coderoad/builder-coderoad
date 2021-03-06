"use strict";
var types_1 = require('./types');
function pjLoad() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.PJ_LOAD, payload: { dir: dir } });
    };
}
exports.pjLoad = pjLoad;
function pjSave(pj) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.PJ_SAVE, payload: { pj: pj, dir: dir } });
    };
}
exports.pjSave = pjSave;
