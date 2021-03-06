import * as React from 'react';
import {connect} from 'react-redux';

import {editorMarkdownOpen} from '../../../actions';
import {pageSelector} from '../../../selectors';
import {Markdown} from '../../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  card: {
    margin: '5px',
  },
};

@connect(state => ({
    page: pageSelector(state),
}), { editorMarkdownOpen })
export default class PageDescription extends React.Component<{
  page?: CR.Page,
  editorMarkdownOpen?: (content: string, index?: number) => Redux.ActionCreator
}, {}> {
  public render() {
    const {page, editorMarkdownOpen} = this.props;
    const {title, description} = page;
    const contentArray = description.split('\n\n');
    return (
      <Card
        style={styles.card}
        initiallyExpanded={true}
      >
        {title
          ? <CardHeader
            title={title}
            actAsExpander={true}
            showExpandableButton={true}
          /> : null}
        <CardText expandable={true}>
          {contentArray.map((c: string, index) => (
            <div
              key={index}
              onClick={editorMarkdownOpen.bind(this, c, null)}
            >
              <Markdown>{c}</Markdown>
            </div>
          ))}
        </CardText>
      </Card>
    );
  }
}
