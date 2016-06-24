"use strict";
var coderoad_cli_1 = require('coderoad-cli');
var _v = {
    errors: [],
    warnings: [],
};
function validation(v, action) {
    if (v === void 0) { v = _v; }
    switch (action.type) {
        case VALIDATE:
            return coderoad_cli_1.validatePackageJson(action.payload.packageJson);
        default:
            return v;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validation;