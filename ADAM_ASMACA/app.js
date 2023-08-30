const wordsection=document.querySelector(".word")
const boardsection=document.querySelector(".board")
const figure=document.querySelector(".figure")
const popup=document.getElementById('popup-container')
const message_el= document.getElementById('success-message')
const letters=[
"A",
"B",
"C",
"Ç",
"D",
"E",
"F",
"G",
"Ğ",
"H",
"I",
"İ",
"J",
"K",
"L",
"M",
"N",
"O",
"Ö",
"P",
"R",
"S",
"Ş",
"T",
"U",
"Ü",
"V",
"Y",
"Z"
];


const human = ["head","body","rightarm","leftarm","rightleg","leftleg"];
let randomword = "";




const createkeybord =()=>
 {
    boardsection.innerHTML=""
    for( let a=0; a<letters.length; a++)
    {
        let square=document.createElement("div");
        square.classList.add("lettersquare");
        square.textContent= letters[a];
        boardsection.appendChild(square);
    }
};

 

const createWord = () => {

    wordsection.innerHTML="";
    randomword = selectWord();
    for ( let a = 0; a < 8; a++ ){
        let square= document.createElement("div");
        square.classList.add("square");
        square.textContent=randomword[a];
        wordsection.appendChild(square);
    }
};

const selectWord =() =>
{
    const word =  [
"AHBAPLIK",
"AKSAKLIK",
"AKSESUAR",
"BAKANLIK",
"BAHTİYAR",
"BAĞLAŞIM",
"ÇAĞRILIŞ",
"ÇİLİNGİR",
"ÇOLAKLIK",
"İBRETLİK",
"JEOTERMİ",
"KABARMAK",
"MADALYON",
"LABİRENT",
"RAHATSIZ",
"ŞAHLANIŞ",
"SABIRSIZ",
"ÜCRETSİZ",
"ÖĞRETİCİ",
"VAHŞİLİK",
"JANDARMA",
"TABELACI",
"TABAKLIK",
"YAĞDIRMA",
"UÇKURSUZ",
"OKKALAMA",
"NAFTALİN",
"ZABİTLİK",
"PAGANİZM"
];
     const randomWord = Math.floor(Math.random() * word.length);
     console.log(word[randomWord]);
     return keyWord=Array.from(word[randomWord]);
};


const generatebody = (value) => {
    let bodypart = document.createElement("div");
    bodypart.classList.add(human[value]);
    figure.appendChild(bodypart);
};


const startgame=()=> 
{
    createkeybord ();
    createWord ();

let buttons = document.querySelectorAll(".lettersquare")
let squares = document.querySelectorAll(".square")
let figuresection=document.querySelectorAll(".figure div")

let wrongout=0
let correctcount=0
figuresection.forEach(item=>{
    if (!item.getAttribute("data-value")) item.remove()
})

const chackletter = (chosenletter,e) => {


   


    if (randomword.includes(chosenletter)){
        e.classList.add("correct")

        squares.forEach(item=>
        {
            if (item.textContent===chosenletter)
            {
                item.classList.add("show")
                correctcount++
                
            }
        })
        if(correctcount===8){
            buttons.forEach(item=>{
                item.classList.add("close")
            })
            squares.forEach(item=>{
                item.style.background="green"
            })
             
            popup.style.display = 'flex';
            message_el.innerText= "Tebrikler Kazandınız!";
     
            setTimeout(()=>{

                popup.style.display='none';

                startgame()
            },3000)
             
         }
   }
   else {
    e.classList.add("wrong");
    wrongout++;
    generatebody(wrongout - 1);
    if (wrongout === 6) {
        buttons.forEach(item=> {
            item.classList.add("close");
        });
        squares.forEach(item =>{
            item.classList.add("show");
            item.style.background="red";
        });

        popup.style.display = 'flex';
        message_el.innerText= "Oyunu Kaybettiniz";
        setTimeout(()=>{
            popup.style.display='none';
            startgame()
        },3000);
    }
   }
};

window.addEventListener('keydown' , e => {
        const letter = e.key;

        console.log(buttons) ;
        buttons.forEach(item=> {
           if(item.textContent == letter.toUpperCase()){
            console.log(item.textContent, new Date()) ;
            chackletter(item.textContent,item) ;
        
           }
        });
});



buttons.forEach(item=>{
    item.addEventListener("click",(e)=>{
        let chosenletter=e.target.textContent 
        chackletter(chosenletter,e.target) ;
    });
});

};
startgame();