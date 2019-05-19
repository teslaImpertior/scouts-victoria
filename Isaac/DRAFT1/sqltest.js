var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var fs = require('fs');

// Create connection to database
var config =
{
    authentication: {
        options: {
            userName: 'PrimeL', // update me
            password: 'Capstone2019' // update me
        },
        type: 'default'
    },
    server: 'primel.database.windows.net', // update me
    options:
    {
        database: 'PrimeL', //update me
        encrypt: true
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            queryDatabase()
        }
    }
);

function queryDatabase()
{
    console.log('Reading rows from the Table...');

    // Read all rows from table
    var request = new Request(
        "SELECT * FROM dbo.candidate",
        function(err, rowCount, rows)
        {
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });

    connection.execSql(request);
}
