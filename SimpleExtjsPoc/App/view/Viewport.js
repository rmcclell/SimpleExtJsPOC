Ext.define('RosterApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'RosterApp.model.Roster',
        'RosterApp.store.Roster',
        'RosterApp.view.Roster'
    ],
    layout: 'fit',
    items: [{ xtype: 'roster' }]
});