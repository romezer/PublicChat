var mysql = require('mysql');

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "2KC7YnHRjm",
    password: "ct3NoBpto0",
    database: "2KC7YnHRjm"
  });

  con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + con.threadId);
  });

  

  module.exports = {
      insertNewMessage: function(Id, nickName, text, avatar){
        console.log('send avatar: ' +avatar);
        return new Promise(function(resolve, reject){
            con.query(`INSERT INTO Messages (Id, Nick_Name, Text, Avatar) VALUES ('${Id}', '${nickName}', '${text}', '${avatar}')`, function (error, results, fields) {
                if (error) return reject(error);
                 return resolve(results);
              });
        })
      },
      
        selectFromMessages: function(){
            return new Promise(function(resolve, reject){
                con.query('SELECT Id, Nick_Name, Text, Time_Stamp, Avatar  FROM Messages ORDER BY Time_Stamp  DESC LIMIT 10', function (error, results, fields) {
                    if (error) return reject(error);
                    return resolve(results);
                  });
            })
      },

      selectActiveUsers: function(){
        return new Promise(function(resolve, reject){
            con.query("SELECT COUNT(DISTINCT Id) as Count, Avatar FROM `Messages` WHERE Avatar IS NOT NULL AND Avatar <> '' GROUP BY Avatar ORDER BY COUNT(DISTINCT Id) DESC LIMIT 5", function (error, results, fields) {
                if (error) return reject(error);
                return resolve(results);
              });
        })
  },

      selectAllMessages: function(){
        return new Promise(function(resolve, reject){
            con.query('SELECT Id, Nick_Name, Text, Time_Stamp, Avatar  FROM Messages ORDER BY Time_Stamp  DESC', function (error, results, fields) {
                if (error) return reject(error);
                return resolve(results);
              });
        })
  }


  };
