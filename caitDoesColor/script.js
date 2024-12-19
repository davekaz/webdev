
//blurry effeect
const loadText = document.querySelector('.loading-text');

const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring,30);

function blurring() {
  load++ ;
  if (load >99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
 // bg.style.filter = 'blur(${scale(count,0 ,100, 30, 0)}px)';
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// (x-in_min)/(in_max-in_min) == (y-out_min)/(out_max-out_min)


 //expanding cards

const panels =document.querySelectorAll('.panel')


panels.forEach((panel) => {
  panel.addEventListener('click',() =>{
    removeActiveClasses()
    panel.classList.add('active')
  })
}) 

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}