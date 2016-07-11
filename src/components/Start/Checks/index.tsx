import * as React from 'react';
import {connect} from 'react-redux';

import {ContentCard} from '../../index';
import InstallGuide from './InstallGuide';
import SetupChecks from './SetupChecks';
import SystemChecks from './SystemChecks';

const styles = {
  margin: '5px',
  padding: '10px',
};

@connect(state => ({
  checks: state.checks,
}))
export default class Checks extends React.Component<{
  checks?: Builder.Checks
}, {}> {
  public render() {
    const {checks} = this.props;
    if (!checks) {
      return <ContentCard
          title='Error Loading Package.json'
          content=''
      />;
    }
    return (
      <div style={styles}>
      {!checks.system.passed
        ? <SystemChecks checks={checks} />
        : null}
        {!checks.setup.passed
          ? <SetupChecks checks={checks} />
          : null}
        <InstallGuide checks={checks} />
      </div>
    );
  }
}
