var bb = bb || {fn:{}}
var hmmResult = bb.fn.basicRun()
// if(typeof hmmResult=='function'){
//   hmmResult = false
// }

//
if(hmmResult===false){
  window.addEventListener('load', function(){
    document.querySelector('iframe#notLogIn').classList.remove('hidden')
  })
}