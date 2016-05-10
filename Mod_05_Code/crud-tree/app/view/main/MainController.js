/**
 * @class CrudTree.main.MainController
 * @extends Ext.app.ViewController
 * Description
 */
Ext.define('CrudTree.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: ['CrudTree.model.Page'],

    init: function() {
        this.listen({
            component: {
                'treepanel': {
                   'select': 'onPageSelect'
                },
                'page-detail #save': {
                    click: 'onSaveClick'
                },
                'page-detail #addChild': {
                    click: 'onAddClick'
                },
                'page-detail #delete': {
                    click: 'onDeleteClick'
                }
            }
        });
    },


    onAddClick: function() {
        var me = this;

        Ext.Msg.prompt('Add Page', 'Page Label', function (action, value) {
            if (action === 'ok') {
                var session = me.getSession(),
                    viewModel = me.getViewModel(),
                    selectedPage = viewModel.getData().page,
                    tree = me.lookupReference('tree');

                var newPage = session.createRecord('Page', {
                    label: value,
                    text: value,
                    leaf: true
                });

                selectedPage.insertChild(0, newPage);
                tree.setSelection(newPage);
                tree.expandNode(selectedPage);
            }
        });
    },


    onDeleteClick: function() {
        var me = this;
        
        Ext.Msg.confirm('Warning', 'Are you sure you\'d like to delete this record?', function(btn) {
            if(btn === 'yes') {
                me.getViewModel().get('page').erase();
                me.getViewModel().set('page', null);
                Ext.toast('Page deleted');
            }
        }, this)
        
    },


    onSaveClick: function() {
        this.getViewModel().get('page').save();
        Ext.toast('Page saved');
    },


    onPageSelect: function(tree, model) {
        this.getViewModel().setLinks({
            page: {
                type: 'Page',
                id: model.getId()
            }
        });
    }
});