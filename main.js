var express = require("express");
var app = express();

// app.get("/",function(req, res) {
//     res.send("hello");
// });
app.get("/grade",function(req, res) {
    var grades = req.query.grades;
        part = grades.split(',')
        total=0;
    console.log(grades);
    console.log(part);
    for(var i=0; i<part.length; i++) {
        total = total + parseInt(part[i]);
        
    }
    // res.sendStatus(total);
    console.log(typeof total);
    console.log(total);
    var avg = total/i;
    console.log(avg);

     if (avg > 90)
    {
        res.send(total+"<br>"+"A");
    }
    else if(total>80){
        res.send(total+"<br>"+"B");
    }
     else
         res.send("f")
})
app.listen(3000);
console.log("Server ready");