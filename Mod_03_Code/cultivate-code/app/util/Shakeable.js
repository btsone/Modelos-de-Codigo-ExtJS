/**
 * @class CultivateCode.util.Shakeable
 * Description
 */
Ext.define('CultivateCode.util.Shakeable', {
    mixinId: 'shakeable',

    shake: function() {
        var el = this.el,
            box = el.getBox(),
            left = box.x - (box.width / 3),
            right = box.x + (box.width / 3),
            end = box.x;

        el.animate({
            duration: 400,
            keyframes: {
                33: {   
                    x: left
                },
                66: {
                    x: right
                },
                100: {
                    x: end
                }
            }
        });
    }
});