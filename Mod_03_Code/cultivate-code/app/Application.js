/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('CultivateCode.Application', {
    extend: 'Ext.app.Application',

    name: 'CultivateCode',

    searchCfg: {
        mode: 'beginsWith',
        dir: 'asc'
    },

    isLoggedIn: false,
    isSecure: false,

    launch: function () {
        this.setupAjaxOverrides();
        this.performCookieCheck();

        Ext.apply(Ext.util.Format, {
            defaultDateFormat: 'd F Y'
        });
    },

    setMasked: function(mask) {
        // Implementation
    },

    setupAjaxOverrides: function() {
        // Implementation
    },

    onAjaxError: function(connection, resp, opt) {
        // Implementation
    },

    performCookieCheck: function() {
        // Implementation
    }
});