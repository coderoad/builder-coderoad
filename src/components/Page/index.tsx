import * as React from 'react';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import PageDescription from './PageDescription';
import Tasks from './Tasks';
import TasksComplete from './TasksComplete';
import Top from '../TopPanel/Top';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

export default class Page extends React.Component<{}, {}> {
  componentDidMount() {
    Top.toggle(true);
  }
  componentWillUnmount() {
    Top.toggle(false);
  }
  render() {
    return (
      <section style={styles} className='cr-page'>
        <PageDescription />
        <Tasks />
        <TasksComplete />
      </section>
    );
  }
};
