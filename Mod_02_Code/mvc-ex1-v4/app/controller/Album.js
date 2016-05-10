// controller/Album.js
Ext.define('MvcEx1v4.controller.Album', {
    extend: 'Ext.app.Controller',

    refs: [{
        // We give our ref the name “detail”. This autogenerates
        // a method on the controller called "getDetail" which
        // will enable us to access the view defined by the selector.
        ref: 'detail',

        // The selector is passed to Ext.ComponentQuery.query,
        // so any valid component query would work here. We're
        // just directly referencing the app-detail alias we
        // set up in the view's configuration
        selector: 'app-detail'
    }],

    init: function() {
        this.control({
            '.app-list': {
                itemdblclick: this.onAlbumDblClick
            }
        });
    },

    onAlbumDblClick: function(list, record) {
        var html = Ext.String.format('{0} by {1}', record.get('name'), record.get('artist'));

        this.getDetail().getEl().setHTML(html);
    }
});
