/**
 * @class CultivateCode.ux.grid.GridManager
 * Description
 */
Ext.define('CultivateCode.ux.grid.GridManager', {
    
    singleton: true,
    currentGrid: null,
    grids: [],

    add: function(grid) {
        this.grids.push(grid);
    },

    setCurrentGrid: function(grid) {
        this.currentGrid = grid;
    }
});


// Ext.define('CultivateCode.view.main.Main', {
//     extend: 'CultivateCode.ux.GridContainer',

//     currentGrid: null,
//     grids: [],

//     add: function(grid) {
//         this.grids.push(grid);
//     },

//     setCurrentGrid: function(grid) {
//         this.currentGrid = grid;
//     }
// });