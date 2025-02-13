



  const nextElement = document.getElementById('next');

  nextElement.addEventListener('click', () => {
  const sendElement = document.getElementById('send');
  
  sendElement.style.display = 'block';
  document.getElementById('sipo2').style.display = 'none'
  document.getElementById('con-1').style.marginLeft ='-405px'

  if (document.getElementById('sipo2').style.display = 'flex') {
    document.getElementById('sipo').style.display = 'none'
  }
  if (document.getElementById('sipo').style.display = 'flex') {
    document.getElementById('sipo2').style.display = 'none'
  }
});





const back = document.getElementById('backo');

  back.addEventListener('click', () => {

  // document.getElementById('con-1').style.marginLeft ='470px'

  if (document.getElementById('con-1').style.marginLeft ='390px') {
    document.getElementById('sipo').style.display = 'none'
    document.getElementById('sipo2').style.display = 'flex'
  }

});













const vbn = document.getElementById('back-rate-m');

  vbn.addEventListener('click', () => {

  // document.getElementById('con-1').style.marginLeft ='470px'
  document.querySelector(".form-v-cont2").style.marginLeft ='0px'

});
