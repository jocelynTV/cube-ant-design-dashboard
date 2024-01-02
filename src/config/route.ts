/**
 * * Public routes
 * @access public
 */
const publicRoute = {
  /**
   * @description /.
   */
  signin: '/',
  /**
   * @description sign-up.
   */
  signup: 'sign-up',
  /**
   * @description verify-account.
   */
  verifyaccount: 'verify-account',
  /**
   * @description forgot-password.
   */
  forgotpassword: 'forgot-password',
  /**
   * @description notification-password.
   */
  notificationpassword: 'notification-password',
  /**
   * @description recover-password.
   */
  recoverpassword: 'recover-password'
};

/**
 * * Protected routes
 * @access protected
 */
const protectRoute = {
  /**
   * @description dashboard.
   */
  dashboard: 'dashboard',
  /**
   * @description products.
   */
  products: 'products',
  /**
   * @description users.
   */
  users: 'users',
  /**
   * @description profile.
   */
  profile: 'profile',
  /**
   * @description billing.
   */
  billing: 'billing',
  /**
   * @description form.
   */
  form: 'form',
  /**
   * @description files.
   */
  files: 'files',
  /**
   * @description setting.
   */
  setting: {
    /**
     * @description basic.
     */
    basic: 'setting/basic',
    /**
     * @description password.
     */
    password: 'setting/password',
    /**
     * @description notification.
     */
    notification: 'setting/notification'
  }
};

export { publicRoute, protectRoute };
