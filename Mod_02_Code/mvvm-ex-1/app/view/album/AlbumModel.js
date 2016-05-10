// view/album/AlbumModel.js
Ext.define('MvvmEx1v5.view.album.AlbumModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.album',

    requires: [
        'MvvmEx1v5.store.Albums',
        'Ext.Msg'
    ],

    stores: {
        albums: {
            type: 'albums'
        }
    },

    buildSummary: function() {
        return this.getStore('albums').collect('name').join(', ');
    }
});