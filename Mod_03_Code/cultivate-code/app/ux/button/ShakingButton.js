/**
 * @class CultivateCode.ux.button.ShakingButton
 * @extends Ext.Button
 * Description
 */
Ext.define('CultivateCode.ux.button.ShakingButton', {
    extend: 'Ext.Button',
    mixins: ['CultivateCode.util.Shakeable'],
    xtype: 'shakingbutton'
});