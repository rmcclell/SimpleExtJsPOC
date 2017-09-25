Ext.define('App.store.Roster', {
    extend: 'Ext.data.Store',
    storeId: 'roster',
    pageSize: 28,
    remoteFilter: false,
    remoteSort: false,
    remoteGroup: false,
    alias: 'store.roster',
    groupField: 'category',
    requires: [
        'App.model.Roster'
    ],
    autoLoad: false,
    model: 'App.model.Roster'
});