// view/album/Album.js
Ext.define('EventDomain1.view.album.Album', {
    extend: 'Ext.container.Container',
    xtype: 'app-album',
    requires: [
        'Ext.grid.Panel',
        'EventDomain1.view.album.AlbumController',
        'EventDomain1.view.album.AlbumModel'
    ],
    controller: 'album',
    layout: 'hbox',
    defaults: {
        width: 250,
        margin: 20
    },
    items: [
        {
            xtype: 'grid',
            reference: 'list',
            viewModel: 'album',
            bind: '{albums}',
            forceFit: true,
            frame: true,
            columns: [
                { text: 'Name', dataIndex: 'name' },
                { text: 'Artist', dataIndex: 'artist' }
            ],
            bbar: [
                '->',
                { xtype: 'button', text: 'Show Artist Summary' },
                '->'
            ]
        },
        { xtype: 'container', reference: 'detail', html: 'Double-click an Album.' }
    ]
});
