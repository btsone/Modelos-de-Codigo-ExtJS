// store/Albums.js
Ext.define('MvcEx1v4.store.Albums', {
    extend: 'Ext.data.JsonStore',

    model: 'MvcEx1v4.model.Album',

    data: [
        { name: 'In Rainbows', artist: 'Radiohead' },
        { name: 'Swim', artist: 'Caribou' }
    ]
});