Ext.define('CrudTree.view.main.PageModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.page',

    requires: ['CrudTree.store.Pages', 'CrudTree.store.SearchResults'],

    stores: {
        pages: {
            type: 'pages',
            session: true
        }
    },

    data: {
        searchTerm: null
    },

    formulas: {
        isUnsavedPage: function(get) {
            return get('page.id').toString().indexOf('Unsaved') > -1;
        }
    }
});
