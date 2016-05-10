/**
 * @class CrudTree.store.Pages
 * @extends Ext.data.NodeStore
 */
Ext.define('CrudTree.store.Pages', {
    extend: 'Ext.data.TreeStore',
    model: 'CrudTree.model.Page',
    alias: 'store.pages',
    root: {} // set empty root as using bind doesn't do this
});