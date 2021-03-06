"use strict";
var path_1 = require('path');
var readFile_1 = require('../utils/readFile');
var types_1 = require('./types');
var pageGet_1 = require('./utils/pageGet');
var taskGet_1 = require('./utils/taskGet');
var taskUpdate_1 = require('./utils/taskUpdate');
var coderoad_cli_1 = require('coderoad-cli');
var _tutorial = {
    info: {
        title: '',
        description: '',
    },
    pages: [].concat(pageGet_1.default(0))
};
function tutorial(t, action) {
    if (t === void 0) { t = _tutorial; }
    switch (action.type) {
        case types_1.TUTORIAL_INIT:
            coderoad_cli_1.create(action.payload);
            if (t.info.title.length < 1) {
                var info = Object.assign({}, t.info, { title: name });
                t = Object.assign({}, t, { info: info });
            }
            return t;
        case types_1.TUTORIAL_BUILD:
            coderoad_cli_1.build({
                dir: action.payload.dir,
                filePath: path_1.join('tutorial', 'tutorial.md'),
            });
            return t;
        case types_1.TUTORIAL_LOAD:
            var loadedCj = readFile_1.default(action.payload.dir, 'coderoad.json');
            return !!loadedCj ? loadedCj : t;
        case types_1.TUTORIAL_PAGE_ADD:
            var pages = t.pages.concat(pageGet_1.default(t.pages.length));
            return Object.assign({}, t, { pages: pages });
        case types_1.TUTORIAL_TASK_ADD:
            var pagePosition = action.payload.pagePosition;
            var tasks = t.pages[pagePosition].tasks;
            tasks.push(taskGet_1.default(pagePosition, tasks.length));
            var updatedPage = Object.assign({}, t.pages[pagePosition], { tasks: tasks });
            t.pages[pagePosition] = updatedPage;
            return Object.assign({}, t);
        case types_1.TUTORIAL_ACTION_ADD:
            return taskUpdate_1.default(t, action.payload.pagePosition, action.payload.taskPosition, 'actions', action.payload.tutorialAction);
        case types_1.TUTORIAL_HINT_ADD:
            return taskUpdate_1.default(t, action.payload.pagePosition, action.payload.taskPosition, 'hints', action.payload.hint);
        case types_1.TUTORIAL_PUBLISH:
            var type = action.payload.type;
            alert("Currently not implemented.\nIn a terminal, run '>apm publish " + type + "'.");
            return t;
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorial;
