import * as React from 'react';
import {connect} from 'react-redux';
import {
  Step, Stepper, StepButton, StepContent, StepLabel
} from 'material-ui/Stepper';
import {Markdown} from '../../index';
import AddButton from '../AddButton';
import getTaskObject from './task-object';
import {tutorialActionAdd} from '../../../actions';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  form: {
    margin: '10px 15px',
    display: 'inline-block',
  },
  select: {
    width: 150,
  },
};

@connect(null, dispatch => {
  return {
    addAction: (actionString: string) => dispatch(tutorialActionAdd(this.props.taskPosition, actionString))
  };
})
export default class TaskActions extends React.Component<{
  actions: string[], taskPosition: number, addAction?: any
}, {
  stepIndex: number, as: {action: string, content: string}
}> {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
      as: {
        action: null,
        content: '',
      }
    };
  }
  handleSelect(event, index, value) {
    this.setState({
      stepIndex: this.state.stepIndex,
      as: {
        action: value,
        content: this.state.as.content
      }
    });
  }
  handleText(event) {
    console.log(event);
    this.setState({
      stepIndex: this.state.stepIndex,
      as: {
        action: this.state.as.action,
        content: event.target.value,
      }
    });
  }
  render() {
    const {actions, addAction} = this.props;
    const {stepIndex} = this.state;
    // TODO: sort actions with higher accuracy
    const actionList: Builder.ActionObject[] = actions.map(a => getTaskObject(a));
    return (
      <Stepper
        activeStep={stepIndex}
        linear={false}
        orientation='vertical'
      >
        {actionList.map((a, index) => (
          <Step>
            <StepButton onClick={() => this.setState({
              stepIndex: index, as: this.state.as}
            )}>
            {a.action + (a.singleLine ? ' ' + a.content : '')}
            </StepButton>
            <StepContent>
              {a.singleLine ? ''
                : <Markdown>{'```js\n' + a.content + '\n```'}</Markdown>
              }
            </StepContent>
          </Step>
        ))}
        <span style={styles.form}>
          <SelectField
            value={this.state.as.action}
            onChange={this.handleSelect.bind(this)}
            style={styles.select}
          >
            <MenuItem value={'open'} primaryText='open' />
            <MenuItem value={'set'} primaryText='set' />
            <MenuItem value={'set'} primaryText='insert' />
          </SelectField>
          <TextField
            hintText='Content'
            value={this.state.as.content}
            onChange={this.handleText.bind(this)}
          />
        </span>
      </Stepper>
    );
  }
}
