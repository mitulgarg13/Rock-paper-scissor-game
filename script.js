let userschoice=document.querySelectorAll(".photo");
let msg=document.querySelector(".byline");
let ussc=document.querySelector(".userscore");
let cosc=document.querySelector(".comscore")
userschoice.forEach((value) =>{
    value.addEventListener("click",() =>{
        let user=value.getAttribute("id");
        const compt=getcomptchoice();
        playgame(user,compt);
        
       }
    )
})
const getcomptchoice=() =>{
    const arr=["rock","paper","scissor"]
    let memes=Math.floor(Math.random()*3);
    return arr[memes];

}




const playgame=(user,compt)=>{
    console.log("c=",compt," u=",user);
  
    if(compt === user){
        msg.innerText="Game was draw.Play again !";
        msg.style.backgroundColor="blue";
    }
    else{  let userwins=true;
        if(compt=== "rock"){
            if(user==="scissor"){
               userwins=false;}
            else{ userwins=true;}
            
        }
        else  if(compt=== "paper"){
            if(user==="scissor"){
                userwins=true;}
               
                else{  userwins=false;}
            
    }
         else{ 
            if(user==="rock"){
                userwins=true;}
            else{   userwins=false;}
            

         }   scorecard(userwins,compt,user);}
         
         console.log(userwin,comptwin);}
   
let userwin =0;
let comptwin=0;
const scorecard=(userwins,compt,user)=>{
     if(userwins){
        msg.innerText="You win !\n  Your "+(user)+" beats computer's "+(compt)+" .";
                userwin++;
                ussc.innerText=(userwin);
                msg.style.backgroundColor="green";
     }
     else{ msg.innerText="You lose !\n  Computer's "+(compt)+" beats your "+(user)+" .";
     comptwin++;
    cosc.innerText=(comptwin);
    msg.style.backgroundColor="red";}
}