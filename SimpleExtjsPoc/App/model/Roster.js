Ext.define('RosterApp.model.Roster', {
    extend: 'Ext.data.Model',
    fields: [
        { type: 'int', name: 'id' },
        { type: 'int', name: 'number' },
        { type: 'string', name: 'pictureCls', mapping: 'id', convert: function (value) { return Ext.String.format('player-pic-{0}', (Ext.isEmpty(value) || value === 6 ? 'none' : value)); }, critical: false, persist: false },
        { type: 'string', name: 'playerName' },
        { type: 'string', name: 'pos' },
        { type: 'string', name: 'batArm', defaultValue: 'R' },
        { type: 'string', name: 'throwArm', defaultValue: 'R' },
        { type: 'string', name: 'height' },
        { type: 'int', name: 'weight' },
        { type: 'int', name: 'age' },
        { type: 'int', name: 'experience' },
        { type: 'string', name: 'birthplace' },
        { type: 'string', name: 'college', defaultValue: 'None' },
        { type: 'int', name: 'salary' },
        { type: 'string', name: 'category', defaultValue: 'Outfielders' }
    ],
    proxy: {
        type: 'rest',
        url: window.location.protocol + '//' + window.location.host + '/api/Roster',
        noCache: false,
        reader: { type: 'json' },
        writer: { type: 'json', allowSingle: true }
    }
});