// store/Albums.js
Ext.define('MvvmEx1v5.store.Albums', {
    extend: 'Ext.data.Store',
    alias: 'store.albums',
    model: 'MvvmEx1v5.model.Album',

    data: [
        { name: 'In Rainbows', artist: 'Radiohead' },
        { name: 'Swim', artist: 'Caribou' }
    ]
});