
var firstarray = [];
function click1(){
    question1 = document.getElementById("input1").value;
    option1 = document.getElementById("input2").value;
    option2 = document.getElementById("input3").value;
    option3 = document.getElementById("input4").value;
    answer = document.getElementById("input5").value;
    console.log(question1);
    console.log(option1);
    console.log(option2);
    console.log(option3);
    console.log(answer);
    function Cont(quest,opt1,opt2,opt3,opt4) {
        this.question1 = quest;
        this.option1 = opt1;
        this.option2 = opt2;
        this.option3 = opt3;
        this.answer = opt4;
    }
    var add = new  Cont(question1, option1, option2, option3, answer);
    
    firstarray.push(add);
    console.log(firstarray);

    //    localStorage.setItem("user" ,JSON.stringify(firstarray));
       document.getElementById("form").reset();
}

var obj = [];
function click22(){
  console.log(obj);
      obj.push(firstarray);
    console.log(firstarray);
    localStorage.setItem('data' , JSON.stringify(firstarray)); 
    document.getElementById("form").reset();


}


