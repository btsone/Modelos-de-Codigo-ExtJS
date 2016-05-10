// model/Album.js
Ext.define('MvcEx1v4.model.Album', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'artist', type: 'string' }
    ]
});
