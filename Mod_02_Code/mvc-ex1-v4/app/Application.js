Ext.Loader.setConfig({
      disableCaching: false
});

Ext.define('MvcEx1v4.Application', {
    name: 'MvcEx1v4',

    extend: 'Ext.app.Application',

    views: ['List', 'Detail'],
    controllers: ['Album'],
    stores: ['Albums']
});
