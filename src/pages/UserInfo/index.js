import React from 'react';
import loadable from '@loadable/component';

import { Loading, ErrorBoundary } from '../../components';

const UserInfo = loadable(() => import('./UserInfo'), {
  fallback: <Loading />
});

export default props => (
  <ErrorBoundary>
    <UserInfo {...props} />
  </ErrorBoundary>
);
