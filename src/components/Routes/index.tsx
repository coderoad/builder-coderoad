import * as React from 'react';
import {connect} from 'react-redux';

import {Page, Start, Test, TutorialConfig, TutorialPublish} from '../index';

@connect(state => ({
  route: state.route,
}))
export default class Routes extends React.Component<{
  route?: string
}, {}> {
  public render() {
    switch (this.props.route) {
      case 'page':
        return <Page />;
      case 'start':
        return <Start />;
      case 'config':
        return <TutorialConfig />;
      case 'publish':
        return <TutorialPublish />;
      case 'test':
        return <Test />;
      // TODO
      // case 'tutorialPublish':
      //   return <TutorialPublish {...props} />;

      default:
        throw 'Error: Route not found.';
    }
  }
}
