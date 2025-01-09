let url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '228c52c55bmsh77f6ab7c31d2797p15d255jsn103e8e7ce92e',
		'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

var final;
var versecount;
var final2;
const get_chapter=async function(){
    try {
    const chapter=document.querySelector('#chapter').value;
    url+=chapter+`/`;
	const response = await fetch(url, options);

	const result = await response.json();
    final=result;
    versecount=result.verses_count;
	console.log(result);
    titleupdater();
    url=`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/`;
    final="";
} catch (error) {
	console.error(error);
}
}

let urlv = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/1/';
const optionsv = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '228c52c55bmsh77f6ab7c31d2797p15d255jsn103e8e7ce92e',
		'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

const get_verse=async function() {try {
    const chapter=document.querySelector('#chapter').value;
    const ver=document.querySelector("#versearch").value;
    urlv=url+chapter+'/'+'verses'+'/'+ver+'/';
	const response = await fetch(urlv, optionsv);
	const result = await response.json();
    final2=result;
	console.log(result);
    verseupdate();
    urlv='https://bhagavad-gita3.p.rapidapi.com/v2/chapters/';
    final2="";
} catch (error) {
	console.error(error);
}
}


const vars=document.querySelector("#varse").addEventListener('click',get_verse);



const search=document.querySelector('#search').addEventListener('click',get_chapter);
function titleupdater(){
    let hind=document.querySelector('#title');
    hind.innerText=final.name + " : " +final.name_meaning;
    hindianimae();
    let sum1=document.querySelector("#hindisum");
    let ver=document.querySelector("#verses").innerText=versecount+" Verses";
    verseanime();

    sum1.innerText=final.chapter_summary_hindi;
    let sum2=document.querySelector("#engsum");
    sum2.innerText=final.chapter_summary;
    engsumanime();
}

function verseupdate(){
    let ver=document.querySelector("#ver");
    ver.innerText=final2.text;
    let translate=document.querySelector('#translation');
    translate.innerText=final2.translations[0].description;
}

let hindianimae=()=>{gsap.from("#hindisum",{
    y:100,
    duration:2,
    ease:"back.out()",
    opacity:0
})}

let engsumanime=()=>{
    gsap.from('#engsum',{
        y:100,
        duration:2,
        ease:"back.out()",
        opacity:0,
    })
}
let verseanime=()=>{
    gsap.from('#verses',{
        x:100,
        opacity:0,
        ease:"back.out()",duration:2
    })
}


