Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.model.Roster',
        'App.store.Roster',
        'App.view.Roster'
    ],
    layout: 'fit',
    items: [{ xtype: 'roster' }]
});