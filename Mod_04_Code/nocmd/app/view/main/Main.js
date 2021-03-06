/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NoCMD.view.main.Main', {
    extend: 'Ext.Panel',
    requires: ['NoCMD.view.main.MainModel', 'NoCMD.view.main.MainController'],
    viewModel: 'main',
    controller: 'main',
    items: [
        { xtype: 'component', bind: { html: '{introText}' } },
        { xtype: 'button', bind: { text: '{buttonText}', handler: 'onClickButton' } }
    ]
});
