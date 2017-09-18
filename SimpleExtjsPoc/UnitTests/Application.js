Ext.application({
    name: 'RosterApp',
    appFolder: '../App',
    autoCreateViewport: false,
    controllers: [
        'RosterApp.controller.Roster'
    ],
    launch: function () {
        Ext.util.Format.currencyPrecision = 0;
        Ext.tip.QuickTipManager.init();
        Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
            dismissDelay: 0
        });
    }
});