Ext.define('CrudTree.view.main.Main', {

    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'CrudTree.view.main.Detail',
        'CrudTree.view.main.Tree'
    ],
    
    session: true,

    controller: 'main',
    viewModel: 'page',
    
    layout: 'border',

    title: 'Architect CMS',
    bind: { title: 'Architect CMS - Currently Editing "{page.text}"' },

    items: [
        { xtype: 'page-detail', region: 'center', reference: 'detail' },
        { xtype: 'page-tree', region: 'west', width: 300, reference: 'tree', split: true }
    ]
});
