import {tutorialUpdated} from '../../actions';
import {
  TUTORIAL_ACTION_ADD, TUTORIAL_BUILD, TUTORIAL_HINT_ADD, TUTORIAL_INIT,
  TUTORIAL_LOAD, TUTORIAL_PAGE_ADD, TUTORIAL_PUBLISH, TUTORIAL_TASK_ADD
} from './types';

export function tutorialInit() {
  return (dispatch, getState) => {
    const {dir, packageJson} = getState();
    dispatch({ type: TUTORIAL_INIT, payload: { dir, name: packageJson.name } });
    dispatch(tutorialBuild());
    dispatch(tutorialLoad());
  };
}

export function tutorialLoad() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_LOAD, payload: { dir } });
  };
}

export function tutorialBuild() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_BUILD, payload: { dir } });
    if (!getState().updated) {
      dispatch(tutorialUpdated(true));
    }
  };
}

export function tutorialPageAdd() {
  return { type: TUTORIAL_PAGE_ADD };
}

export function tutorialTaskAdd() {
  return (dispatch, getState) => {
    const {pagePosition} = getState();
    const taskPosition = getState().tutorial.pages[pagePosition].tasks.length || 0;
    dispatch({ type: TUTORIAL_TASK_ADD, payload: { pagePosition, taskPosition } });
  };
}

export function tutorialActionAdd(taskPosition: number, tutorialAction: Object) {
  return (dispatch, getState) => {
    const {pagePosition} = getState();
    dispatch({ type: TUTORIAL_ACTION_ADD, payload: { pagePosition, taskPosition, tutorialAction } });
  };
}

export function tutorialHintAdd(taskPosition: number, hint: string) {
  return (dispatch, getState) => {
    const {pagePosition} = getState();
    dispatch({ type: TUTORIAL_HINT_ADD, payload: { pagePosition, taskPosition, hint } });
  };
}

export function tutorialPublish(type: string) {
  return (dispatch, getState) => {
    dispatch({ type: TUTORIAL_PUBLISH, payload: { type } });
    dispatch(tutorialUpdated(false));
  };
}
