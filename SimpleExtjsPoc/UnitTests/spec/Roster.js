describe('Roster Assumptions', function () {
    var viewPort = null,
        grid = null,
        data = null,
        store = null;

    beforeAll(function (done) {

        var isDone = done;

        viewPort = Ext.create('RosterApp.view.Viewport', {
            renderTo: Ext.getBody()
        });

        grid = viewPort.down('grid');
        store = grid.getStore();

        store.setProxy({ type: 'memory' });

        Ext.Ajax.request({
            url: '/UnitTests/mock/Roster.json',
            success: function (response) {
                data = Ext.decode(response.responseText);
                store.loadRawData(data.input);
                isDone();
            }
        });

    });

    afterAll(function () {
        Ext.destroy(viewPort);
        viewPort = null;
    });

    it('View Port Created', function () {
        expect(viewPort !== null).toBeTruthy();
    });

    it('Roster View Rendered', function () {
        expect(grid.isVisible()).toBeTruthy();
    });

    it('Roster Store Defined', function () {
        expect(store !== null).toBeTruthy();
    });

    it('Roster Count Matches', function () {
        expect(store.getCount() === 28).toBeTruthy();
    });

    it('Roster View must have correct groups', function () {
        expect(store.getGroups().length === 4).toBeTruthy();
    });

    it('Roster View must have correct rendered data', function () {
        var rows = store.getRange();
        var columns = grid.columns;
        var renderedData = [];
        var rowObj = {};

        for (var r = 0; r < rows.length; r++) {
            rowObj = {}
            for (var c = 0; c < columns.length; c++) {
                if (columns[c].dataIndex) {
                    rowObj[columns[c].dataIndex] = columns[c].renderer && Ext.isFunction(columns[c].renderer) ? columns[c].renderer(rows[r].get(columns[c].dataIndex)) : rows[r].get(columns[c].dataIndex);
                }
            }
            renderedData.push(rowObj);
        }

        expect(Ext.encode(renderedData) === Ext.encode(data.output)).toBeTruthy();
    });
});