// view/album/AlbumModel.js
Ext.define('EventDomain1.view.album.AlbumModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.album',

    requires: [
        'EventDomain1.store.Albums'
    ],

    stores: {
        albums: {
            type: 'albums'
        }
    },

    buildSummary: function() {
        return this.getStore('albums').collect('name').join(', ');
    },


    search: function(searchTerm) {
        this.getStore('albums').setFilters({
            property: 'name',
            value: searchTerm,
            operator: 'like'
        });
    }
});