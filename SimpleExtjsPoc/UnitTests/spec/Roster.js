describe('Roster Assumptions', function () {
    var grid = null,
        addButton = null,
        data = null,
        store = null;

    beforeAll(function (done) {

        var isDone = done;

        grid = Ext.create('RosterApp.view.Roster', {
            renderTo: Ext.getBody()
        });

        store = grid.getStore();

        store.setProxy({ type: 'memory' });

        Ext.Ajax.request({
            url: '/UnitTests/mock/Roster.json',
            success: function (response) {
                data = Ext.decode(response.responseText);
                store.loadRawData(data.input.items);
                addButton = grid.down('button#add');
                isDone();
            }
        });

    });

    afterAll(function () {
        Ext.destroy(grid);
        grid = null;
    });

    it('Roster View Rendered', function () {
        expect(grid.isVisible()).toBeTruthy();
    });

    it('Roster Store Defined', function () {
        expect(store !== null).toBeTruthy();
    });

    it('Roster Count Matches', function () {
        expect(store.getTotalCount() === 28).toBeTruthy();
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
                    rowObj[columns[c].dataIndex] = columns[c].renderer && Ext.isFunction(columns[c].renderer) ? columns[c].renderer(rows[r].get(columns[c].dataIndex )) : rows[r].get(columns[c].dataIndex);
                }
            }
            renderedData.push(rowObj);
        }
        expect(Ext.encode(renderedData) === Ext.encode(data.output)).toBeTruthy();
    });

    it('Roster View add new row', function () {
        expect(addButton !== null).toBeTruthy();
        expect(addButton.isVisible()).toBeTruthy();
        addButton.fireEvent('click', addButton);
        grid.editingPlugin.getEditor().form.setValues({
            age: 30,
            batArm: 'R',
            birthplace: '',
            category: 'Outfielders',
            college: 'None',
            experience: 10,
            height: '5\' 10',
            number: 27,
            playerName: 'Babe Ruth',
            pos: 'CF',
            salary: 10000,
            throwArm: 'R',
            weight: 260
        });

        grid.editingPlugin.getEditor().form.updateRecord();
        grid.fireEvent('edit', grid.editingPlugin.getEditor(), { record: grid.editingPlugin.getEditor().form.getRecord() });  

        expect(store.getCount() === 29).toBeTruthy();
    });


});