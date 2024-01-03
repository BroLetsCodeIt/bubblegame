// Event Bubbling

// jispe click karoge wo element par event raise hoga , aur event listener naa milne par event element ke parent par listener dhundhega , waha bhi naa milne par event parent ke parent ke parent par listener dhundega.

var middle = document.querySelector('.middle');
var circle = document.querySelectorAll('.middle .circle');
var timer = document.querySelector('.top .elem-timer .timer');

var score = 0 ; 
function increasescore(){
       
     score += 10 ; 
     let scoreval =  document.querySelector('#scoreval');
     scoreval.innerHTML = score; 
}
function circles(){
    var newdiv  = '';

    for(let i  = 0 ; i < 10 * 24 ; i++){
    //     // step 1 : create the new div
    // const newdiv = document.createElement('div');
    
    // // step 2 : provide the class name to it
    //    newdiv.className = 'circle';
    //    newdiv.innerHTML = Math.floor(Math.random() * 10);
    //     middle.append(newdiv)
      let num = Math.floor(Math.random() * 10);
       newdiv  += `<div class='circle'>${num}</div>`
    }
    
    middle.innerHTML = newdiv;
}


var time = 30;
function timingfun(){
    //    console.log('hello')
  
    var timerint = setInterval(() => {
        if(time >= 0){
            timer.textContent = time;
            time--;
        }else{
        clearInterval(timerint);
        // alert('gameover')
        document.querySelector('.middle').innerHTML = `<h1>Game Over</h1> `

        let restartbtn = document.createElement('button');
     
        restartbtn.innerHTML = "Restart";
        restartbtn.style.fontSize = '2vw';
        restartbtn.style.marginTop = '1rem';
        restartbtn.style.padding = '0.6rem 1rem';
        restartbtn.style.borderRadius = '1rem'
        document.querySelector('.middle').appendChild(restartbtn);
        restartbtn.addEventListener('click' ,() =>{
            location.reload();
        })
        
     }
   }, (1000));
}
function hitval(){
    var rn = Math.floor(Math.random() * 10);
    var hit = document.querySelector('.elem-hit .hit');
    hit.textContent = rn;
}

circles();
hitval();



middle.addEventListener('click',(e) =>{
     console.log(e.target.outerText)
     let hitvalue = document.querySelector('.elem-hit .hit').textContent;
     if(hitvalue == e.target.outerText){
        console.log('yes');
        circles();
        timingfun();
        increasescore();
        hitval();
     }
})







