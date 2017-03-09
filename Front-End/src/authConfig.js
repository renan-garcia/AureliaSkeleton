export default {
    endpoint: 'auth',
    configureEndpoints: ['auth'],
    loginUrl: '/api/security/token',  
    signupUrl: 'users',
    profileUrl: 'me',
    unlinkUrl: 'me/unlink',
    loginRedirect: '#',

    loginOnSignup: false,
    storageChangedReload: false,    // ensure secondary tab reloading after auth status changes
    expiredRedirect: 1            // redirect to logoutRedirect after token expiration
};