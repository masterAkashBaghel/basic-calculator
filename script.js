 

let string = "";
let ans = document.querySelector(".input");
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
     button.addEventListener("click",(e)=>{
       try{
        if(e.target.innerHTML=='=')
        {
          string = eval(string);
          ans.value = string;


        }
        else if(e.target.innerHTML=='AC')
        {
            string = " ";
            ans.value = string;
        }
        else if(e.target.innerHTML == "C")
        {
            string = string.slice(0,-1);
            ans.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            ans.value = string;
        }
       }
       catch(error)
       {
        
        initialize();
        alert("please enter valid expression");
        
        

       }
     });
});
function initialize()
{
    string = " ";
   ans.value = string;
}