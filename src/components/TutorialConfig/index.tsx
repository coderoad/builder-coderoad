import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, tutorialInit, routeSet} from '../../actions';
import languageItems from './languageItems';
import runnerItems from './runnerItems';
import {topElement} from '../TopPanel';
import textField from '../Form/textField';
import selectField from '../Form/selectField';
import validate from './validate';

const styles = {
  card: {
    margin: '10px',
    padding: '30px 20px',
    textAlign: 'center',
  },
  button: {
    margin: '30px 10px 20px 10px',
  },
};

@connect(state => ({
  packageJson: state.packageJson,
}), dispatch => ({
  save: (pj: Tutorial.PJ) => dispatch(pjSave(pj)),
  routeToPage() {
    dispatch(tutorialInit());
    dispatch(routeSet('page'));
  }
}))
class TutorialConfig extends React.Component <{
  packageJson?: PackageJson,
  save?: (pj: Tutorial.PJ) => any,
  routeToPage?: () => any,
  pristine?: boolean, submitting?: boolean, handleSubmit?: any,
  language?: string, invalid?: boolean, initialize?: any
}, {}> {
  refs: {
    [key: string]: (Element);
    name: HTMLInputElement;
  };
  componentWillMount() {
    this.props.initialize({
      name: 'coderoad-tutorial-name',
      language: 'JS',
      runner: 'mocha-coderoad',
    });
  }
  componentDidMount() {
    topElement.toggle(false);
    // focus first element
    document.getElementsByTagName('input')[0].focus();
  }
  onSubmit(values) {
    const {name, language, runner} = values;
    this.props.save(Object.assign(
      {},
      this.props.packageJson,
      {
        name,
        config: {
          language, runner
        }
      })
    );
  }
  render() {
    const {pristine, submitting, handleSubmit, invalid} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Configuration'
        />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field
            name='name'
            component={textField.bind(null, {
              hintText: 'coderoad-tutorial-name',
            })}
           />

          <Field
            name='language'
            component={selectField.bind(null, {
              children: languageItems(),
              floatingLabelText: 'language',
            })}
          />

          <Field
            name='runner'
            component={selectField.bind(null, {
              children: runnerItems('JS'),
              floatingLabelText: 'Test Runner',
            })}
          />

          <RaisedButton
            type='submit'
            style={styles.button}
            label='Save'
            primary={true}
            disabled={invalid}
          />
          <RaisedButton
            style={styles.button}
            label='Continue'
            secondary={true}
            disabled={invalid}
            onTouchTap={this.props.routeToPage.bind(this)}
          />

        </form>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'tutorialConfig',
  validate,
})(TutorialConfig);
