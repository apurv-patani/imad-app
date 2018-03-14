console.log('Loaded!');

//change text from main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'new val';

//change posn of image 

var img=document.getElementById('madi');
var marginLeft = 0; 
function moveRight()
{
	marginLeft+=5;
	img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function ()
{
	var interval = setInterval(moveRight,100);
	// img.style.marginLeft = '100px';
};