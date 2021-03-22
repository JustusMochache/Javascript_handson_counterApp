// initialize/start from
var count = 0;

//select value and button
//queryselector picks the first element if you had 2 or more classes with same name
//querry selector picks everything in either a class or id with the same name.
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");


//lets loop through the buttons
//lets use a forEach Loop which visits each item in our var btns that w selectd using querry selector all.

btns.forEach(

    function(btn){
        btn.addEventListener("click", function(e){
            // when you click the buuton it selects in javascript
           var style = (e.currentTarget.classList);

           //if, else if and else && contains means it holds somthing
           if(style.contains("decrease")){
               count--;
           } //elseif has to be outside curley braces
           else if(style.contains("increase")){
               count++;
           } // else has to be outside curley braces
           else{
               count = 0;
           }

        // it picks

        // to change color on count we use if statements 
        // we used bayern vs psg { 1, x, 2} betting  options to explain it
        //if statements has a condition in () that if met it does something
       
        if(count>0){
            value.style.color = "green";
        }

         // else if is used if there is more than two conditions to be met
        else if(count<0){
            value.style.color = "red";
        }

         //else doesnt have a condition since its already met.
        else{
            value.style.color = "black";
        }

        
           value.textContent = count;
        })
    
})
