Ext.define('RosterApp.store.Roster', {
    extend: 'Ext.data.Store',
    storeId: 'roster',
    alias: 'store.roster',
    groupField: 'category',
    requires: [
        'RosterApp.model.Roster'
    ],
    autoLoad: false,
    model: 'RosterApp.model.Roster'
});