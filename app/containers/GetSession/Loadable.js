/**
 *
 * Asynchronously loads the component for GetSession
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
