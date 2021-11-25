const text='My viewers on twitch are the best!!';

let idx=0;

function writeText(){

    document.body.innerText=text.slice(0,idx);

    idx++;

    if(idx>text.length){
        idx=0;
    }
}

setInterval(writeText, 150);
