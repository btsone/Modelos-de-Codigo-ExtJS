/**
 * @class CrudTree.view.main.Tree
 * @extends Ext.tree.Panel
 * Description
 */
Ext.define('CrudTree.view.main.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'page-tree',
    rootVisible: false,
    bind: { store: '{pages}', searchFor: '{searchTerm}' },
    tbar: [
        { xtype: 'textfield', emptyText: 'Search...', width: '100%', bind: { value: '{searchTerm}'}}
    ],

    config: {
        searchFor: null
    },

    applySearchFor: function(text) {
        var match = this.getRootNode().findChildBy(function(child) {
            var txt = child.get('text');

            if(txt.match(new RegExp(text, 'i'))) {
                this.expandNode(child, true, function() {
                    Ext.get(this.getView().getNode(child)).highlight();
                }, this);
            }
        }, this, true);
    }
});