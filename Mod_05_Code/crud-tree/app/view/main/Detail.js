Ext.define('CrudTree.view.main.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'page-detail',
    defaultType: 'textfield',
    bodyPadding: 10,
    hidden: true,
    bind: {
        hidden: '{!page}'
    },
    items: [
        { xtype: 'container', cls: 'ct-alert', html: 'This record is unsaved!', bind: { hidden: '{!isUnsavedPage}' } },
        { fieldLabel: 'Id', bind: '{page.id}', xtype: 'displayfield'},
        { fieldLabel: 'Published', bind: '{page.published}', xtype: 'checkboxfield' },
        { fieldLabel: 'Label', bind: '{page.text}' },
        { fieldLabel: 'URL Stub', bind: '{page.stub}' },
        { fieldLabel: 'Body', bind: { value: '{page.body}' }, xtype: 'htmleditor' }
    ],
    bbar: [
        { text: 'Save', itemId: 'save' },
        { text: 'Add Child Page', itemId: 'addChild' },
        { text: 'Delete', itemId: 'delete' }
    ]
});