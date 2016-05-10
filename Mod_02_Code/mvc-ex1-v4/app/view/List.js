// view/List.js
Ext.define('MvcEx1v4.view.List', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.app-list',
    store: 'Albums',
    forceFit: true,
    frame: true,
    requires: ['Ext.Msg'],

    columns: [
        { text: 'Album', dataIndex: 'name' },
        { text: 'Artist', dataIndex: 'artist' }
    ],

    initComponent: function() {
        this.bbar = [
            '->',
            { xtype: 'button', text: 'Show Artist Summary', handler: this.onShowSummary, scope: this },
            '->'
        ];

        this.callParent(arguments);
    },

    onShowSummary: function() {
        var summary = this.getStore().collect('artist').join(', ');

        Ext.Msg.alert('Artists', summary);
    }
});