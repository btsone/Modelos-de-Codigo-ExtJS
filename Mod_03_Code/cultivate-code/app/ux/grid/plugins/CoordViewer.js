Ext.define('CultivateCode.ux.grid.plugins.CoordViewer', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.coordviewer',

    mixins: {
        observable: 'Ext.util.Observable'
    },

    init: function(grid) {
        this.mon(grid.view, 'cellclick', this.onCellClick, this);
    },

    onCellClick: function(view, cell, colIdx, record, row, rowIdx, e) {
        var coords = Ext.String.format('Cell is at {0}, {1}', colIdx, rowIdx)

        Ext.Msg.alert('Coordinates', coords);
    }
});