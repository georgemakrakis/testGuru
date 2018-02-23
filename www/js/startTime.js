function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day= today.getDate();
    var month= today.getMonth()+1;
    var year = today.getFullYear();
    document.getElementById('Clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    document.getElementById('Date').innerHTML = day +"/"+ month +"/"+year;
   
}
