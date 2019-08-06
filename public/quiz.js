var localStorageValue = localStorage.getItem("data");
localStorageValue = JSON.parse(localStorageValue);

var question1 = document.getElementById("question1");
console.log(question1)
var option1 = document.getElementById("option1");
console.log(option1)
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var count = 0;
var score = 0;

var inputClass = document.getElementsByClassName("input1");
inputClass[0].value = localStorageValue[count].option1;
inputClass[1].value = localStorageValue[count].option2;
inputClass[2].value = localStorageValue[count].option3;


question1.innerHTML = localStorageValue[count].question1;
option1.innerHTML = localStorageValue[count].option1;
option2.innerHTML = localStorageValue[count].option2;
option3.innerHTML = localStorageValue[count].option3;




function nextQuestion(){
    var inputNames = document.getElementsByName("option");
    for(var i = 0; i < inputNames.length; i++){
        if(inputNames[i].checked){
            console.log(inputNames[i].value)
          if(inputNames[i].value === localStorageValue[count].answer){
              score = (100/localStorageValue.length) + score;
              console.log(score);
          }
        }
    }
    if( count < localStorageValue.length-1){
    count++;
    inputClass[0].value = localStorageValue[count].option1;
    inputClass[1].value = localStorageValue[count].option2;
    inputClass[2].value = localStorageValue[count].option3;

    question1.innerHTML = localStorageValue[count].question1;
    option1.innerHTML = localStorageValue[count].option1;
    option2.innerHTML = localStorageValue[count].option2;
    option3.innerHTML = localStorageValue[count].option3; 
}
else{
    document.getElementById("maindiv").style.display = "none";
    if(score >= 60){
        document.getElementById("result").innerHTML = "<h1 style='color:green'>Congratulation<h1/>" + "<br/>" + score + "%";
    }
    else{
        document.getElementById("result").innerHTML = "<h1 style='color:red'> Sorry! your are fail <h1/>" + "<br/>" + score + "%";
}
}
}










// var questions = [{
//     "question": "This set of Javascript Multiple Choice Questions",
//     "option1": "String",
//     "option2": "Object",
//     "option3": "Serialized Object",
//     "option4": "Serialized",
//     "answer": "option4"
// },
// {
//     "question": "The object has three object attributes namely",
//     "option1": "Class, parameters, object’s extensible flag",
//     "option2": "Prototype, class, object’s extensible flag",
//     "option3": "Prototype, class, objects’ parameters",
//     "option4": "class, objects’ parameters",
//     "answer": "option2"
// },
// {
//     "question": "In the above snippet, firstname and surname are",
//     "option1": "properties",
//     "option2": "property values",
//     "option3": "property names",
//     "option4": " property",
//     "answer": "option1"
// },
// {
//     "question": "A linkage of series of prototype objects is called as",
//     "option1": "prototype stack",
//     "option2": "prototype chain",
//     "option3": "prototype class",
//     "option4": "class",
//     "answer": "option4"
// },
// {
//     "question": "In the above syntax, the datatype within the square brackets must be",
//     "option1": " A String",
//     "option2": "An object",
//     "option3": "An integer",
//     "option4": "nteger",
//     "answer": "option3"
// },]