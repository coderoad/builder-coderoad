import {join} from 'path';
import * as React from 'react';
import {connect} from 'react-redux';

import {editorMarkdownOpen, tutorialTaskAdd} from '../../../actions';
import {tasksSelector} from '../../../selectors';
import AddButton from '../AddButton';
import Hints from '../Hints';
import Task from '../Task';
import TaskActions from '../TaskActions';
import Tests from '../Tests';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import {lightGreen200} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import {Tab, Tabs} from 'material-ui/Tabs';

const styles = {
  card: {
    margin: '5px',
  },
  cardContent: {
    margin: '0px',
    padding: '0px',
  },
  tabBar: {
    backgroundColor: 'black',
  },
  addTask: {
    textAlign: 'center',
  },
  test: {
    float: 'right',
    marginRight: '30px',
  },
  title: {
    float: 'left',
    marginLeft: '10px',
  },
};

@connect(state => ({
  tasks: tasksSelector(state),
}), {tutorialTaskAdd, editorMarkdownOpen})
export default class Tasks extends React.Component<{
  tasks?: CR.Task[],
  tutorialTaskAdd?: () => Redux.ActionCreator,
  editorMarkdownOpen?: (content: string, index?: number) => Redux.ActionCreator,
}, {}> {
  public render() {
    const {tasks, tutorialTaskAdd, editorMarkdownOpen} = this.props;
    return (
      <div>
        {tasks.map((task: CR.Task, index: number) => (
          <Card
            key={index}
            style={styles.card}
            initiallyExpanded={index === 0}
          >
            <CardHeader
              actAsExpander={true}
              showExpandableButton={true}
            >
              <span style={styles.title}>Task {index + 1}</span>
              <Tests
                style={styles.test}
                tests={task.tests}
              />
            </CardHeader>
            <CardText expandable={true} style={styles.cardContent}>
              <Tabs tabItemContainerStyle={styles.tabBar}>

                <Tab label='Description'>
                  <div onClick={editorMarkdownOpen.bind(this, task.description, null)}>
                    <Task
                      key={index}
                      index={index}
                      task={task}
                    />
                  </div>
                </Tab>

                <Tab label='Actions'>
                  <TaskActions
                    actions={task.actions}
                    taskPosition={index}
                  />
                </Tab>

                <Tab label='Hints'>
                  <Hints
                    hints={task.hints}
                    taskPosition={index}
                  />
                </Tab>

              </Tabs>
            </CardText>
          </Card>)
        )}

        {/*<AddButton callback={tutorialTaskAdd}/>*/}

      </div>
    );
  }
}
