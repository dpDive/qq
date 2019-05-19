function openWindow({redirectURL, isRedirect=true, windowNameSpecific}=''){
  if(isRedirect){
    window.name = window.name || 'x'
  }
  else if(windowNameSpecific){
    window.name = windowNameSpecific
  }

  var {url, windowName, windowFeatures} = {
    url: redirectURL || 'https://docs.google.com/forms/d/e/1FAIpQLScAKYe1mG8o8Vfxj0khZWWHbMg7upEguqFzAYEESTBROwy8LA/viewform?usp=pp_url&entry.950619120'
    +'='+window.location.search.replace(/[?][\S\s]*q[=]/, '').replace(/[&][\S\s]*/, ''),

    windowName: window.name, //_blank //null
    windowFeatures: undefined,
  }

  window.open(url, windowName)
}

openWindow()



// <a
//  href="http://www.google.com/"
//  target="_blank"
//  onclick="openPopup(); return false;" 
//  title="This link will create a new window or will re-use an already opened one"
// >Open Popup</a>
