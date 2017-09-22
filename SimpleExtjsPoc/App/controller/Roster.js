Ext.define('RosterApp.controller.Roster', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'viewport',
        selector: 'viewport'
    }],
    stores: ['Roster'],
    models: ['Roster'],
    views: ['Roster'],
    init: function () {
        this.control({
            'roster': {
                edit: { fn: this.onSave, scope: this },
                beforerender: { fn: this.launch, scope: this }
            },
            'roster button#add': {
                click: { fn: this.onAddRow, scope: this }
            },
            'roster actioncolumn': {
                editaction: { fn: this.onEditRow, scope: this },
                deleteaction: { fn: this.onDeleteRow, scope: this }
            }
        });
    },
    launch: function (grid) {
        grid.getStore().load({
            params: {
                page: 1,
                limit: 28
            }
        });
    },
    onEditRow: function (view, rowIndex, colIndex, item, e, record, row) {
        view.editingPlugin.startEdit(rowIndex, 0);
    },
    onDeleteRow: function (view, rowIndex, colIndex, item, e, record, row) {
        var store = view.getStore();
        Ext.Msg.show({
            title: 'Confirm Delete',
            message: 'Are you sure you would like to delete the current row?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    store.remove(record);
                    store.sync();
                }
            }
        });
    },
    onSave: function(editor, e) {
        // commit the changes right after editing finished
        e.record.store.sync();
    },
    onAddRow: function (button) {
        var grid = button.up('grid');
        var store = grid.getStore();
        var record = store.add({});
        var rowIdx = store.indexOf(record[0]);
        grid.editingPlugin.startEdit(rowIdx, 0);
    }
});