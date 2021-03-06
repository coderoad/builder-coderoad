"use strict";
var actions_1 = require('../../actions');
var types_1 = require('./types');
function pageSet(pagePosition) {
    return function (dispatch, getState) {
        dispatch({ type: types_1.PAGE_SET, payload: { pagePosition: pagePosition } });
        dispatch(actions_1.routeSet('page'));
    };
}
exports.pageSet = pageSet;
