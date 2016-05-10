// view/album/Album.js
Ext.define('MvvmEx1v5.view.album.Album', {
    extend: 'Ext.container.Container',
    xtype: 'app-album',
    requires: ['Ext.grid.Panel'],
    controller: 'album',
    layout: 'hbox',
    defaults: {
        width: 250
    },
    items: [
        {
            xtype: 'grid',
            reference: 'list',
            viewModel: 'album',
            bind: '{albums}',
            forceFit: true,
            frame: true,
            margin: '20 10 20 20',
            columns: [
                { text: 'Album', dataIndex: 'name' },
                { text: 'Artist', dataIndex: 'artist' }
            ],
            bbar: [
                '->',
                { xtype: 'button', text: 'Show Artist Summary', handler: 'onShowSummary' },
                '->'
            ],
            listeners: {
                rowdblclick: 'onAlbumDblClick'
            }
        },
        { xtype: 'container', margin: '20 10', reference: 'detail', width: 150, html: 'Double-click an Album to select' }
    ]
});
