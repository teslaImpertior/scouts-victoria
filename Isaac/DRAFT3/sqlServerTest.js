var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
  // Create connection to database
  var config = { authentication: { options: { userName: 'PrimeL', password: 'Capstone2019' }, type: 'default' }, server: 'primel.database.windows.net', // update me
      options: { database: 'PrimeL', encrypt: true } }
  var connection = new Connection(config);

  // Attempt to connect and execute queries if connection goes through
  connection.on('connect', function(err) { if (err) { console.log(err) } else { queryDatabase() } } );

  // To connect to API type --> http://127.0.0.1:8081/listUsers
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
              res.end(column.value); // this line only returns 1 of the items, and does not iterate
          });
      });
      connection.execSql(request);
  }

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
