/**
 * @class CultivateCode.ux.form.MetaPanel
 * @extends Ext.form.Panel
 * Description
 */
Ext.define('CultivateCode.ux.form.MetaPanel', {
    extend: 'Ext.form.Panel',

    // mixins: [
    //     // Contains methods:
    //     // - buildItemsFromRecord
    //     // - buildFieldsetsFromRecord
    //     // - buildItemForField
    //     'CultivateCode.ux.form.Builder',

    //     // - isStateAvailable
    //     // - addPersistenceEvents
    //     // - persistFieldOnChange
    //     // - restorePersistedForm
    //     // - clearPersistence
    //     'CultivateCode.ux.form.Persistence'
    // ],

    initialize: function() {
        this.callParent(arguments);
        this.addPersistenceEvents();
    },

    loadRecord: function(model) {
        this.buildItemsFromRecord(model);
        this.callParent(arguments);
    },

    buildItemsFromRecord: function(model) {
        // Implementation
    },

    buildFieldsetsFromRecord: function(model){
        // Implementation
    },

    buildItemForField: function(field){
        // Implementation
    },

    isStateAvailable: function(){
        // Implementation
    },

    addPersistenceEvents: function(){
        // Implementation
    },

    persistFieldOnChange: function(){
        // Implementation
    },

    restorePersistedForm: function(){
        // Implementation
    },

    clearPersistence: function(){
        // Implementation
    }
});