import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

// module reducers
import {reducer as pagePosition} from './modules/page-position';
import {reducer as checks} from './modules/setup';
import {reducer as packageJson} from './modules/package-json';
import {reducer as result} from './modules/result';
import {reducer as runner} from './modules/runner';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as windowToggle} from './modules/window';
import {reducer as validation} from './modules/validate-tutorial';
import {reducer as updated} from './modules/updated';

// core reducers
import {
  alertReducer as alert,
  editorReducer as editor,
  dirReducer as dir,
  routeReducer as route
} from 'core-coderoad';

export default combineReducers({
  alert, checks, editor, dir, form,
  packageJson, pagePosition, result, route,
  tutorial, updated, validation, windowToggle,
  runner,
});
