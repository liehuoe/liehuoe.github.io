new Vue().$mount('#app');

$.ajax({
  type: "GET",
  url: "data.db",
  success: function(data) {
      var db = new SQL.Database(new Uint8Array(data));
      var stmt = db.prepare("SELECT * FROM people");
      while(stmt.step()) {
          var row = stmt.getAsObject();
          console.log('Here is a row: ' + JSON.stringify(row));
      }
  }
});