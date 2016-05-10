/**
 * @class CultivateCode.util.Mathematics
 * @extends 
 * Description
 */
Ext.define('CultivateCode.util.Mathematics', {
    singleton: true,

    square: function(num) {
        return Math.pow(num, 2);
    },

    circumference: function(radius) {
        return 2 * Math.PI * radius;
    }
});