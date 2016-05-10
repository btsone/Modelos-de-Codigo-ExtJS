/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('CultivateCode.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        users: {
            type: 'users'
        }
    }
});