Ext.define('RosterApp.store.Roster', {
    extend: 'Ext.data.BufferedStore',
    storeId: 'roster',
    remoteGroup: false,
    pageSize: 10,
    alias: 'store.roster',
    groupField: 'category',
    requires: [
        'RosterApp.model.Roster'
    ],
    autoLoad: false,
    model: 'RosterApp.model.Roster'
});