// model/Album.js
Ext.define('EventDomain1.model.Album', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'artist', type: 'string' }
    ]
});