/* <%= pkg %> <%= version %> */
import { urljoin as _u, loadable } from 'utils'

import MODULE_URLS from './urls'

const moduleName = 'app.<%= lower %>'


export default [
  {
    path     :MODULE_URLS.REDEEM,
    component:loadable(() => import (/* webpackChunkName: `app.<%= lower %>` */ './components/Redeemer.js')),
    exact:true
  }

  /*
  {
    path     :MODULE_URLS.LOGOUT,
    component:Logout,
    private  :true,
    //test:(user) => user.id
  },
  */
]




