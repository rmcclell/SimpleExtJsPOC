Ext.define('App.store.Roster', {
    extend: 'Ext.data.Store',
    storeId: 'roster',
    alias: 'store.roster',
    groupField: 'category',
    requires: [
        'App.model.Roster'
    ],
    autoLoad: false,
    model: 'App.model.Roster'
});