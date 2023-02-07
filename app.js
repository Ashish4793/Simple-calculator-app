const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended:true
}));


app.get("/", function(req,res){
    res.render("home");
});

app.post("/submit" , function(req,res){
    console.log(req.body.num_one);
    console.log(req.body.num_two);
    console.log(req.body.operator);

    const submittedOperator = req.body.operator;
    const firstNo = parseInt(req.body.num_one);
    const secondNo = parseInt(req.body.num_two);


    if(submittedOperator === "+") {
        var sum = firstNo + secondNo;
        res.render("submit" , {finalAnswer : sum});
        console.log(sum);
    } else if (submittedOperator === "-"){
        var sum = firstNo - secondNo;
        res.render("submit" , {finalAnswer : sum});
        console.log(sum);
    } else if (submittedOperator === "*"){
        var sum = firstNo * secondNo;
        res.render("submit" , {finalAnswer : sum});
        console.log(sum);
    } else if (submittedOperator === "%"){
        var sum = firstNo / secondNo;
        res.render("submit" , {finalAnswer : sum}); 
        console.log(sum);
    } else{
        console.log("ERROR");
    }

});


app.listen(3000,function(){
    console.log("<<<<<<<-----------Server started succesfully---------->>>>>>>")
})