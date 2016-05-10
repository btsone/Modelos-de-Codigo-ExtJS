// store/Albums.js
Ext.define('EventDomain1.store.Albums', {
    extend: 'Ext.data.Store',
    alias: 'store.albums',
    model: 'EventDomain1.model.Album',

    data: [
        { name: 'In Rainbows', artist: 'Radiohead' },
        { name: 'Swim', artist: 'Caribou' }
    ]
});