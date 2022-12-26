const slide = document.getElementById('slider');


slide.addEventListener('mouseup', e => {
    let slideVal = document.getElementById('sliderInput').value;
    document.getElementById("sliderOutput").innerHTML = slideVal + "x" + slideVal;
    console.log(slideVal)
});



