/**
 *
 * Asynchronously loads the component for CheckSessionIdcontainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
