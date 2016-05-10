// view/album/AlbumController.js
Ext.define('EventDomain1.view.album.AlbumController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.album',

    init: function() {
        this.listen({
            controller: {
                '*': {
                    'search': 'onSearch'
                }
            },

            component: {
                'app-album grid': {
                   'rowdblclick': 'onAlbumDblClick'
                },
                'app-album button': {
                   'click': 'onShowSummary'
                }
            }
        });
    },

    onSearch: function(searchTerm) {
        this.lookupReference('list').getViewModel().search(searchTerm);
    },

    onShowSummary: function() {
        var summary = this.lookupReference('list').getViewModel().buildSummary();

        alert(summary);
    },

    onAlbumDblClick: function(list, record) {
        var html = Ext.String.format('{0} by {1}', record.get('name'), record.get('artist'));
        this.lookupReference('detail').getEl().setHtml(html);
    }
});
