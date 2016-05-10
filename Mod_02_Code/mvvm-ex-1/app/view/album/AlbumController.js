// view/album/AlbumController.js
Ext.define('MvvmEx1v5.view.album.AlbumController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.album',

    onShowSummary: function() {
        var summary = this.lookupReference('list').getViewModel().buildSummary();

        Ext.Msg.alert('Artists', summary);
    },

    onAlbumDblClick: function(list, record) {
        var html = Ext.String.format('{0} by {1}', record.get('name'), record.get('artist'));
        this.lookupReference('detail').getEl().setHtml(html);
    }
});
