import {join} from 'path';
import {editorOpen, editorScroll} from '../../actions';
import tutorialConfigOptions from 'core-coderoad/lib/options';
import twoDigitify from '../../services/twoDigitify';

export function editorMarkdownOpen(content: string, index?: number) {
  console.log(content, index);
  return (dispatch, getState) => {
    const filePath = join(
      'tutorial',
      twoDigitify(index ? index + 1 : getState().pagePosition + 1),
      'index.md'
    );
    dispatch(editorOpen(filePath));
    if (content) {
      content = content.replace(/↵/mg, '\n');
      dispatch(editorScroll(content));
    }
  };
}

export function editorTestOpen(pageIndex: number, testIndex: number) {
  return (dispatch, getState) => {
    // get language suffix, ex: .js
    const suffix = tutorialConfigOptions[getState().packageJson.config].language.suffix;
    const filePath = join(
      'tutorial',
      twoDigitify(pageIndex || getState().pagePosition),
      twoDigitify(testIndex) + '.' + suffix
    );
    dispatch(editorOpen(filePath));
  };
}
