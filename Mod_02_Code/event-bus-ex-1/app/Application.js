/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('EventDomain1.Application', {
    extend: 'Ext.app.Application',
    name: 'EventDomain1',
    controllers: ['Main@EventDomain1.controller']
});