import * as React from 'react';
import {Markdown} from '../../index';
import taskCheckbox from './taskCheckbox';
import {ListItem} from 'material-ui/List';
import {lightGreen200, orange200} from 'material-ui/styles/colors';
import Tests from '../Tests';
import TaskActions from '../TaskActions';
import Hints from '../Hints';

const styles = {
  task: {
    margin: '5px',
    padding: '5px',
    position: 'relative'
  },
  index: {
    position: 'absolute',
    top: '20px',
    left: '45px',
  },
  description: {
    backgroundColor: 'inherit',
    paddingTop: '-10px',
    paddingLeft: '55px',
    fontSize: '14px',
    lineHeight: '1.6',
  },
};

function getStatus(
  index: number, taskPosition: number, testRun: boolean
): string {
  return index < taskPosition ? lightGreen200 : 'inherit';
}

const Task: React.StatelessComponent<{
  task: CR.Task, index: number
}> = ({task, index}) => (
  <div>
  <ListItem
    key={index}
    style={styles.task}
  >

    <span style={styles.index}>{index + 1}.</span>
    <div style={styles.description}>
      <Markdown >{task.description}</Markdown>
    </div>

    <Tests tests={task.tests} />

    <Hints hints={task.hints} />

  </ListItem>
  <TaskActions actions={task.actions}/>
  </div>
);
export default Task;
