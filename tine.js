let string ="";
// const cactus = document.getElementById('cactus');
let buttons= document.querySelectorAll(".btno").length;


for (let i = 0; i < buttons; i++) {
    document.querySelectorAll(".btno")[i].addEventListener("click",function (e) {
        if (e.target.innerHTML === "=") {
            try{
            string=eval(string);
            document.querySelector('input').value=`                             ${string}`;
            }catch{
                document.querySelector('input').value=`                             ${string}`.innerHTML="                 Math Error!";
            }
        }
        else if (e.target.innerHTML === "AC") {
            string=" ";
            document.querySelector('input').value=`                             ${string}`;
        }
        else{
        string+= e.target.innerHTML;
        document.querySelector('input').value=`                             ${string}`;
        }

        
    })
    
}





// Array.from(buttons).forEach(buttons) {
//     buttons.addEventListner('click', (e)=>{
//         console.log(e.target);
//     })
// }























