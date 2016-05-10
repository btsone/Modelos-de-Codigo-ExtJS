// model/Artist.js
Ext.define('MyApp.model.Artist.', {
    extend: 'Ext.data.Model',

    fields: [
    	{ name: 'name', type: 'string' }
    ]
});

// model/Album.js
Ext.define('MyApp.model.Album', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'artist', reference: 'Artist' }
    ],

    getRunningTime: function() {
    	return this.tracks().sum('lengthInMs');
    }
});

// model/Track.js
Ext.define('MyApp.model.Track.', {
    extend: 'Ext.data.Model',

    fields: [
    	{ name: 'title', type: 'string' },
    	{ name: 'lengthInMs', type: 'integer' },
    	{ name: 'album', reference: 'Album' }
    ]
});