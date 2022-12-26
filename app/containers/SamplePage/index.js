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
import CenteredSection from '../../components/CenteredSection/CenteredSection';
import Section from '../../components/Section/Section';
import H2 from '../../components/H2/index';
import AtPrefix from '../../components/AtPrefix/AtPrefix';
// import Form from '../../components/Form/Form';
// import Input from '../../components/Input/Input';
export function SamplePage() {
  useInjectReducer({ key: 'samplePage', reducer });
  useInjectSaga({ key: 'samplePage', saga });

  return (
    <div>
      <Helmet>
        <title>SamplePage</title>
        <meta name="description" content="Description of SamplePage" />
      </Helmet>
      <CenteredSection>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <p>
          <FormattedMessage {...messages.subHeader} />
        </p>
      </CenteredSection>
      <Section>
        <H2>
          <FormattedMessage {...messages.trymeHeader} />
        </H2>
        <p>
          <FormattedMessage {...messages.trymeMessage} />
        </p>
        <AtPrefix>
          <FormattedMessage {...messages.trymeAtPrefix} />
        </AtPrefix>
      </Section>
      {/* <Form onSubmit={onSubmitForm}>
        <label htmlFor="username">
          <FormattedMessage {...messages.trymeMessage} />
          <AtPrefix>
            <FormattedMessage {...messages.trymeAtPrefix} />
          </AtPrefix>
          <Input
            id="username"
            type="text"
            placeholder="mxstbr"
            value={username}
            onChange={onChangeUsername}
          />
        </label>
      </Form> */}
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
