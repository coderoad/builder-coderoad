import * as React from 'react';
import {connect} from 'react-redux';

import {windowToggle} from '../../actions';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

@connect(null, {windowToggle})
export default class CloseWindow extends React.Component<{
  windowToggle?: () => Redux.ActionCreator
}, {}> {
  public render() {
    return (
      <IconButton onClick={this.props.windowToggle}>
        <NavigationClose color='white'/>
      </IconButton>
    );
  }
}
