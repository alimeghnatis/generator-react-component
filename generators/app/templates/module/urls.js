/* <%= pkg %> <%= version %> */
import { urljoin as _u } from 'utils'

const basePath = '/<%= lower %>/'

export default {
  //LOGIN  :'login',
  HOME   :basePath,
  PROFILE:_u(basePath, 'profile')
}
