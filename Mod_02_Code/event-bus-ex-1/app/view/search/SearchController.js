// view/search/SearchController.js
Ext.define('EventDomain1.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search',
    
    init: function() {
        this.listen({
            component: {
                'app-search button': {
                   'click': 'onSearchSubmit'
                }
            }
        });
    },

    onSearchSubmit: function() {
        var val = this.lookupReference('searchfield').getValue();
        this.fireEvent('search', val);
    }
});
