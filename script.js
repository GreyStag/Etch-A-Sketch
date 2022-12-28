const slide = document.getElementById('slider');
const sketch = document.getElementById('sketchPad');
const horizDiv = document.createElement('div');
const vertDiv = document.createElement('div');


slide.addEventListener('mouseup', e => {
    $('#sketchPad > div').remove()
    let firstVal = document.getElementById('sliderInput').value;
    let slideVal = 0;
    if (firstVal % 2 != 0){
        slideVal = firstVal - 1;
    }
    else {
        slideVal = firstVal
    }
    document.getElementById("sliderOutput").innerHTML = slideVal + "x" + slideVal;
    sizingDivs(slideVal)
});

function sizingDivs(num){
    console.log(num)
    let pad = 500
    let resize = (Math.floor((pad/num) * 10000))/10000;
    console.log(resize)
    let newNum = (num * num)/2;

  
    for (i = 0; i < newNum; i++){
        const horizDiv = document.createElement('div');
        const vertDiv = document.createElement('div');

        horizDiv.setAttribute('style', 'background: green;');
        vertDiv.setAttribute('style', 'background: blue;');

        horizDiv.style.width = resize + "px";
        horizDiv.style.height = resize + "px";

        vertDiv.style.width = resize + "px";
        vertDiv.style.height = resize + "px";

        sketch.appendChild(vertDiv)
        sketch.appendChild(horizDiv)
    };
}

// function addingDivs(num){
//     console.log(num)
  
//     for (i = 0; i < num; i++){
//         horizDiv.appendChild(vertDiv)
        
//     };
    
//     for (i = 0; i < num; i++){
//         sketch.appendChild(vertDiv)
//     };
// }