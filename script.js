
const qrImage = document.getElementById('qrimage');
const qrInput = document.getElementById('qrinput');
const submitBtn = document.getElementById('submit')

const container = document.querySelector('.data-container')
const qrDisplayImage = document.querySelector('.qr-display')

submitBtn.addEventListener('click', ()=>{
  qrDisplay();
});

function qrDisplay(){

  if(qrInput.value.length > 0){
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrInput.value;

    container.classList.toggle('show-container')
    qrDisplayImage.classList.add('show-qr')

    qrImage.classList.add('imageanim')
  }else{

  }
}


function downloadClick(){
  
}

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 