Ext.define('RosterApp.view.Roster', {
    extend: 'Ext.grid.Panel',
    title: 'Roster',
    alias: 'widget.roster',
    store: { type: 'roster' },
    tbar: [{
        xtype: 'button',
        text: 'Add Player',
        itemId: 'add',
        iconCls: 'x-fa fa-plus green'
    }],
    selModel: 'rowmodel',
    plugins: [{
        ptype: 'gridfilters'
    }, {
        ptype: 'rowediting',
        clicksToEdit: 2
    }],
    features: [{
        ftype: 'grouping',
        groupers: [{
            property: 'category',
            groupFn: function (val) {
                return val.data.name;
            }
        }]
    }],
    columns: [
        { text: 'Id', dataIndex: 'id', hidden: true, filter: { type: 'string' } },
        { width: 100, text: 'Number', dataIndex: 'number', editor: 'numberfield', filter: { type: 'number' } },
        { flex: 1.25, text: 'Picture', dataIndex: 'pictureUrl', renderer: function (value) { return Ext.String.format('<img src="{0}">', (Ext.isEmpty(value) ? '/Images/PlayerPics/None.png' : value)); } },
        { flex: 1.5, text: 'Player Name', dataIndex: 'playerName', editor: 'textfield', filter: { type: 'string' } },
        { flex: 1.5, text: 'Position(s)', dataIndex: 'pos', editor: { xtype: 'tagfield', store: ['1B', '3B', '2B', 'C', 'CF', 'LF', 'RF', 'RP', 'P', 'CL', 'SP', 'SS'] }, filter: { type: 'list' } },
        { width: 100, text: 'Batting Arm', dataIndex: 'batArm', align: 'center', editor: { xtype: 'combo', store: ['L', 'R', 'S'] }, filter: { type: 'list' } },
        { width: 100, text: 'Throw Arm', dataIndex: 'throwArm', align: 'center', editor: { xtype: 'combo', store: ['L', 'R', 'S'] }, filter: { type: 'list' } },
        { width: 80, text: 'Height', dataIndex: 'height', style: 'text-align:right;', align: 'right', editor: { xtype: 'combo', store: ['5\' 0"', '5\' 1"', '5\' 2"', '5\' 3"', '5\' 4"', '5\' 5"', '5\' 6"', '5\' 7"', '5\' 8"', '5\' 9"', '5\' 10"', '5\' 11"', '6\' 0"', '6\' 1"', '6\' 2"', '6\' 3"', '6\' 4"', '6\' 5"', '6\' 6"', '6\' 7"', '6\' 8"', '6\' 9"', '6\' 10"', '6\' 11"'] }, filter: { type: 'list' } },
        { width: 85, text: 'Weight', dataIndex: 'weight', style: 'text-align:right;', align: 'right', editor: 'numberfield', filter: { type: 'number' } },
        { width: 65, text: 'Age', dataIndex: 'age', style: 'text-align:right;', align: 'right', editor: 'numberfield', filter: { type: 'number' } },
        { width: 110, text: 'Experience', dataIndex: 'experience', style: 'text-align:right;', align: 'right', editor: 'numberfield', filter: { type: 'number' }, renderer: function (value) { return (value === 0) ? 'R' : value; } },
        { flex: 2, text: 'Birthplace', dataIndex: 'birthplace', editor: 'textfield', renderer: function (value) { return value.replace(',', ',<br>'); }, filter: { type: 'string' } },
        { flex: 1.5, text: 'College', dataIndex: 'college', editor: { xtype: 'combo', store: ['Connecticut', 'East Carolina', 'Evansville', 'Georgia Tech', 'Kentucky', 'LSU', 'None', 'Northeastern', 'Oklahoma', 'Oregon', 'Rollins', 'Southern Nevada CC', 'Texas Tech', 'UCLA', 'Virginia', 'Western Carolina'] }, filter: { type: 'list' } },
        { flex: 1.5, text: 'Salary', dataIndex: 'salary', style: 'text-align:right;', align: 'right', editor: 'numberfield', formatter: 'currency', filter: { type: 'number' } },
        { flex: 1, text: 'Category', dataIndex: 'category', editor: { xtype: 'combo', store: ['Catchers', 'Pitchers', 'Infielders', 'Outfielders'] }, filter: { type: 'list' } },
        {
            xtype: 'actioncolumn',
            width: 50, menuDisabled: true,
            sortable: false,
            items: [{
                iconCls: 'x-fa fa-pencil yellow',
                tooltip: 'Edit Row',
                handler: function (view, rowIndex, colIndex, item, e, record, row) {
                    this.fireEvent('editaction', view, rowIndex, colIndex, item, e, record, row);
                }
            }, {
                iconCls: 'x-fa fa-remove red',
                tooltip: 'Remove Row',
                handler: function (view, rowIndex, colIndex, item, e, record, row) {
                    this.fireEvent('deleteaction', view, rowIndex, colIndex, item, e, record, row);
                }
            }]
        }
    ]
});