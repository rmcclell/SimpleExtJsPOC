describe('Roster Assumptions', function () {
    var grid = null,
        addButton = null,
        record = null,
        data = null,
        store = null;

    beforeAll(function (done) {

        var isDone = done;

        grid = Ext.create('App.view.Roster', {
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
        //Comment out to debug
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
        //Verify Rendered Data Matches Expeceted
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
            for (var prop in rowObj) {
                if (rowObj[prop] !== data.output[r][prop]) {
                    console.log(prop, 'Actual Value', rowObj[prop], 'Expected Value', data.output[r][prop]);
                }
                expect(rowObj[prop] === data.output[r][prop]).toBeTruthy();
            }
        }
    });

    it('Roster View add new row', function () {
        //Add New Row Through UI
        expect(addButton !== null).toBeTruthy();
        expect(addButton.isVisible()).toBeTruthy();
        addButton.fireEvent('click', addButton);
        grid.editingPlugin.getEditor().form.setValues({
            age: 30,
            batArm: 'L',
            birthplace: 'Baltimore, Maryland',
            category: 'Infielders',
            college: 'None',
            experience: 22,
            height: '6\' 2',
            number: 3,
            playerName: 'Babe Ruth',
            pos: '1B',
            salary: 10000,
            throwArm: 'L',
            weight: 215
        });

        grid.editingPlugin.getEditor().form.updateRecord();
        record = grid.editingPlugin.getEditor().form.getRecord();
        record.phantom = true;
        grid.fireEvent('edit', grid.editingPlugin.getEditor(), {
            record: record
        });  

        expect(store.getCount() === 29).toBeTruthy();
        grid.editingPlugin.completeEdit();
    });

    it('Roster View edit existing row', function () {
        //Edit Row Through UI
        grid.down('actioncolumn').fireEvent('editaction', grid.getView(), grid.getStore().indexOf(grid.getSelectionModel().getLastSelected())); 
        expect(record !== null).toBeTruthy();

        grid.editingPlugin.getEditor().form.setValues({
            age: 30,
            batArm: 'L',
            birthplace: 'Baltimore, Maryland',
            category: 'Infielders',
            college: 'None',
            experience: 22,
            height: '6\' 2',
            number: 3,
            playerName: 'Babe Ruth Edited',
            pos: '1B',
            salary: 10000,
            throwArm: 'L',
            weight: 215
        });

        grid.editingPlugin.getEditor().form.updateRecord();

        record = grid.editingPlugin.getEditor().form.getRecord();

        expect(store.getCount() === 29).toBeTruthy();
        grid.editingPlugin.completeEdit();
        
    });

    it('Roster View delete existing row', function () {
        //Delete Row Via UI

        var messageBox = grid.down('actioncolumn').fireEvent('deleteaction', grid.getView(), null, null, null, null, grid.getSelectionModel().getLastSelected(), null);
        var yesButton = Ext.ComponentQuery.query('button#yes')[0];

        //Trigger yes response on confirm
        yesButton.fireHandler();
        expect(store.getCount() === 28).toBeTruthy();
    });
    
});