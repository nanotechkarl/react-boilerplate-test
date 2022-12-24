/**
 *
 * SamplePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSamplePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function SamplePage() {
  useInjectReducer({ key: 'samplePage', reducer });
  useInjectSaga({ key: 'samplePage', saga });

  return (
    <div>
      <Helmet>
        <title>SamplePage</title>
        <meta name="description" content="Description of SamplePage" />
      </Helmet>
      <h2>
        <FormattedMessage {...messages.header} />
      </h2>
    </div>
  );
}

SamplePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  samplePage: makeSelectSamplePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SamplePage);
