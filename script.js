
let body=document.getElementsByTagName('body');
let darkbtn=document.getElementById('darkbtn');
let home=document.getElementById('HOME');
let about=document.getElementById('ABOUT');
let skills=document.getElementById('SKILLS');
let education=document.getElementById('EDUCATIONS');
let project=document.getElementById('PROJECTS');
let contact=document.getElementById('CONTACTS');
let can=document.getElementById('cani');
let cf=document.getElementById('CF');

let bg=0;

let cards=Array.from(document.getElementsByClassName('card'));



function displaythecolor(){
    home.classList.toggle("darky");
    skills.classList.toggle("darky");
    education.classList.toggle("darky");
    cf.classList.toggle("darky");
    project.classList.toggle("darky");
    contact.classList.toggle("darky");
    about.classList.toggle("darky");
    cards.forEach((element)=>{
        element.classList.toggle("darkycard");
    })
    document.getElementById('ed1').classList.toggle('darkycard');
    document.getElementById('ed2').classList.toggle('darkycard');
    document.body.classList.toggle('darkyy-body');
    // document.getElementsByTagName('body').classList.toggle('darky');
    // document.getElementById('f1').classList.toggle('darky');
    // document.getElementById('f2').classList.toggle('darky');

   
    
    if(bg===0){
        bg=1;
    }
    else{
        bg=0;
    }

    if(bg===1){
        darkbtn.innerText="Switch to Light Mode";
    
    }
    else{
        darkbtn.innerText="Switch to Dark Mode";
        
    }
}
darkbtn.addEventListener('click',displaythecolor);


// cf api work-------------------------------------- 
const url=`https://codeforces.com/api/user.info?handles=anishgupta1510;`
async function getuserinfo(){
    const resp=await fetch(url,{

    origin:"cors"});
    const respdata=await resp.json();
    // console.log(respdata);
    // console.log(respdata.result[0].rating);
    document.getElementById("handlename").innerText="Codeforces Handle -> anishgupta1510";
    document.getElementById("maxrating").innerText=`Rating -> ${respdata.result[0].rating}`;
    document.getElementById("rank").innerText=`Rank -> ${respdata.result[0].rank}`;

}
getuserinfo();