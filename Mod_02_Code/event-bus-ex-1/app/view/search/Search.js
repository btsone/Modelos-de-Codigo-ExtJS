// view/search/Search.js
Ext.define('EventDomain1.view.search.Search',{
    extend: 'Ext.panel.Panel',
    controller: 'search',
    xtype: 'app-search',

    requires: [
        'EventDomain1.view.search.SearchController',
        'Ext.form.field.Text'
    ],

    items: [
        { xtype: 'textfield', reference: 'searchfield' },
        { xtype: 'button', text: 'search' }
    ]
});
