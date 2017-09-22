Ext.define('RosterApp.store.Roster', {
    extend: 'Ext.data.Store',
    storeId: 'roster',
    pageSize: 28,
    remoteFilter: false,
    remoteSort: false,
    remoteGroup: false,
    alias: 'store.roster',
    groupField: 'category',
    requires: [
        'RosterApp.model.Roster'
    ],
    autoLoad: false,
    model: 'RosterApp.model.Roster'
});