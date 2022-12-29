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
import makeSelectSamplePage, { makeSelectUsernameSample } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import CenteredSection from '../../components/CenteredSection/CenteredSection';
import Section from '../../components/Section/Section';
import H2 from '../../components/H2/index';
import AtPrefix from '../../components/AtPrefix/AtPrefix';
// import { makeSelectUsername } from '../HomePage/selectors';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import ReposList from '../../components/ReposList';
import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';
export function SamplePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key: 'samplePage', reducer });
  useInjectSaga({ key: 'samplePage', saga });

  const reposListProps = {
    loading,
    error,
    repos,
  };

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
        <Form onSubmit={onSubmitForm}>
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
        </Form>
        <ReposList {...reposListProps} />
      </Section>
    </div>
  );
}

SamplePage.propTypes = {
  username: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  samplePage: makeSelectSamplePage(),
  repos: makeSelectRepos(),
  username: makeSelectUsernameSample(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => {
      // console.log('evt :', evt.target.value);
      return dispatch(changeUsername(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
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
