/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TO DO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CultivateCode.view.main.Main', {
    extend: 'Ext.TabPanel',

    xtype: 'app-main',

    requires: [
        'Ext.grid.Panel',
        'CultivateCode.ux.grid.plugins.CoordViewer',
        'CultivateCode.ux.button.ShakingButton'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    items: [{
        title: 'Grid',
        xtype: 'grid',
        plugins: 'coordviewer',
        bind: '{users}',
        type: 'main',
        columns: [
            { text: 'Name',  dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone' }
        ]
    },{
        title: 'Shake',
        xtype: 'container',
        items: {
            xtype: 'shakingbutton', text: 'Shake It!', handler: function(btn) {
                btn.shake();
            }
        }
    }]
});
