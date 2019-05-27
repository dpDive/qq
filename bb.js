var bb = bb || {fn:{}}
bb.fn.basicRun = function run(){
  bb.fn.initializeData()
  return bb.fn.openWindow({userKeyName:'notName', emailKeyName:'notEmail'})
}


bb.fn.getDict = function getDict(dataString, delimiter='&;'){
  var delimiterFinal = '['+delimiter+']'
  //var dict = {}
  return dataString.split(new RegExp(delimiterFinal)).reduce((accumulator,dictString)=>{
    var [keyName, value] = dictString.split('=')
    keyName = keyName.trim()
    accumulator[keyName] = (typeof value!=='undefined')? value :null
    return accumulator
  }, {})
  //return dict
}

bb.fn.initializeData = function initializeData(){
  bb.cookie = bb.fn.getDict(document.cookie, ';')
  bb.query  = bb.fn.getDict(window.location.search.slice(1), '&')
  // bb.priority = ['query', 'cookie',]
  bb.data   = Object.assign({}, bb.cookie, bb.query)
  bb.isDataInitialized = true
  return bb.data
}
// bb.fn.get = function get(keyName){
//   //for(aType of bb.priority)
//   if(typeof bb.query[keyName] !== 'undefined'){
//     return bb.query[keyName]
//   }
//   if(typeof bb.cookie[keyName] !== 'undefined'){
//     return bb.cookie[keyName]
//   }
//   return undefined
// }


bb.fn.openWindow = function openWindow({redirectURL, isRedirect=true, windowNameSpecific, questionTextKeyName='q', questionRefKeyName='qr', userKeyName='u', emailKeyName='e', userName}=''){
  var data = bb.data || bb.fn.initializeData()

  if(typeof data[userKeyName]==='undefined'){
    return false
  }
  if(typeof data['i']!=='undefined'){
    console.log('data',data)
    return bb.fn.openWindow
  }
  if(isRedirect){
    window.name = window.name || 'x'
  }
  else if(windowNameSpecific){
    window.name = windowNameSpecific
  }

  //URL
  var finalData = Object.assign({}, {
    questionRefName: data[questionRefKeyName]||'qr',
    questionText: data[questionTextKeyName]||'See question on the board',
    userName: userName||data[userKeyName]||'',
    email: data[emailKeyName]||'',
  })
  var newUserKeyName = 'entry.1556877090' //yep
  var newQuestionTextKeyName = 'entry.121123003' //yep
  var newAnswerTextKeyName = 'entry.597529986' //yep
  var newEmailKeyName = 'entry.1155295681' //yep
  var {url, windowName, windowFeatures} = {
    url: (redirectURL || 'https://docs.google.com/forms/d/e/1FAIpQLScAKYe1mG8o8Vfxj0khZWWHbMg7upEguqFzAYEESTBROwy8LA/viewform?usp=pp_url&entry.950619120') //yep
    +'='+finalData.questionRefName
    +`&${newUserKeyName}=` +finalData.userName
    +`&${newQuestionTextKeyName}=` +finalData.questionText
    +`&${newEmailKeyName}=` +finalData.email
    ,

    windowName: window.name, //_blank //null
    windowFeatures: undefined,
  }
  window.open(url, windowName)
  return true
}

// bb.fn.basicRun()



// <a
//  href="http://www.google.com/"
//  target="_blank"
//  onclick="openPopup(); return false;" 
//  title="This link will create a new window or will re-use an already opened one"
// >Open Popup</a>
