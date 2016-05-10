// model/Album.js
Ext.define('MvvmEx1v5.model.Album', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'artist', type: 'string' }
    ]
});