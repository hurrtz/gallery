import React, { lazy, Suspense } from 'react';

const loadable = (
  importFunc,
  /* istanbul ignore next: jest bug ignoring tests with matching default parameter */
  { fallback = null } = { fallback: null },
) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
