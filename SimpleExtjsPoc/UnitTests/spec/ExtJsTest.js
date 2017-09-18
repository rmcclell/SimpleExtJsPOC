describe('Basic Assumptions', function () {
    var application = null;

    beforeAll(function () {
        application = RosterApp.getApplication();
    });

    it('ExtJS framework is loaded and ready', function () {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(6);
    });

    it('Roster Application Created', function () {
        expect(application !== null).toBeTruthy();
    });
});