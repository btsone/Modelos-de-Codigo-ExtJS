// https://fiddle.sencha.com/#fiddle/90s

// Basic JSON sample data
var sampleData = { data: [
    { "firstName": "Jack", "surname": "Slocum" },
    { "firstName": "Shea", "surname": "Frederick" },
    { "firstName": "Colin", "surname": "Ramsay" },
    { "firstName": "Steve", "middle": "Cutter", "surname": "Blades" },
    { "firstName": "Nigel", "surname": "White" },
] };

// Create a store to hold our JSON data
var userStore = new Ext.data.JsonStore({
    data: sampleData,
    root: 'data',
    fields: ['firstName', 'middle', 'surname']
});

// Grid panel using the store, setting the columns to match the incoming data
var grid = new Ext.grid.GridPanel({
    store: userStore,
    colModel: new Ext.grid.ColumnModel({
        defaults: {
            width: 120,
            sortable: true
        },
        columns: [
            { header: 'First Name', dataIndex: 'firstName' },
            { header: 'Middle', dataIndex: 'middle' },
            { header: 'Surname', dataIndex: 'surname' }
        ]
    }),
    viewConfig: {
        forceFit: true
    },
    width: 600,
    height: 300,
    frame: true
});

// Event handler to do something when the user clicks a row
grid.on('rowclick', function(g, idx) {
    Ext.Msg.alert('Alert', 'You clicked on the row at index ' + idx);
});

// Render the grid to the viewport
grid.render(document.body);