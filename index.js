new Vue().$mount('#app');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'file://G:/liehuoe.github.io/data.db', true);
xhr.responseType = 'arraybuffer';
xhr.onload = e => {
  var uInt8Array = new Uint8Array(xhr.response);
  var db = new SQL.Database(uInt8Array);
  var res = db.exec("select * from people");
  console.log(JSON.stringify(res));
};
xhr.send();