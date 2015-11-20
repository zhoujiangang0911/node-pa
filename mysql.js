var mysql = require('mysql');  
      
var TEST_DATABASE = 'node';  
var TEST_TABLE = 'testnode';  
  
//创建连接  
var client = mysql.createConnection({  
  user: 'root',  
  password: '123456',  
  port: 3307,

});  

client.connect();
client.query("use " + TEST_DATABASE);

client.query(  
  'SELECT * FROM '+TEST_TABLE,  
  function selectCb(err, results, fields) {  
    if (err) {  
      throw err;  
    }  
      
      if(results)
      {
          for(var i = 0; i < results.length; i++)
          {
              console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].age);
          }
      }    
    client.end();  
  }  
); 