import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import CloseWindow from './CloseWindow';
import menuRight from './menuRight';
import {onDeactivate} from '../../subscriptions';

const styles = {
  zIndex: '1',
};

const AppMenu: React.StatelessComponent<{
  route: string, quit?: any
}> = ({route}) => {
  return (
    <AppBar
      title='CodeRoad'
      className='cr-menu-bar'
      style={{styles}}
      iconElementLeft={<CloseWindow />}
      iconElementRight={menuRight(route)}
    />
  );
};
export default AppMenu;
