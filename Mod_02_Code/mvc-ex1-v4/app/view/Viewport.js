// view/Viewport.js
Ext.define('MvcEx1v4.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:['MvcEx1v4.view.List'],
    layout: 'hbox',
    defaults: {
        width: 250,
        margin: 20
    },
    items: [{ xtype: 'app-list' }, { xtype: 'app-detail' }]
});