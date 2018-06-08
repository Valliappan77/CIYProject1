
function createBottles(numOfBottles){
var divElem = document.createElement('div');

for (var i = 0; i < numOfBottles) {
    //create the image
    var imgElem = document.createElement('img');
    imgElem.settAttribute('src', '/images/beer.png');
    imgElem.classList.add('small');

    //append to div
    divElem.appendChild(imgElem);

}
return(divElem);
}

//<div> some text</div>

function createText(line){
var divElem=document.createElement('div');
divElem.ElemtextContent=line;
return(divElem);

}
var beerSongElem = document.bodyquerySelector('#beer-song');

for (var i=99;i>0;i--){

var bottles =createBottle(i);
pElem.appendChild(bottles);
var text=createText(`${i} bottles of beer on the wall,${i} bottles of beer`);
pElem.appendChild(text);
text=createText(`take one down and pass it around,${i-1} bottles of beer on the wall`);
pElem.appendChild(text);
}