/**

 */
var bb = bb || {fn:{}}
var documentCookie = documentCookie || {
  // isUseMemo: true,
  // memo: {},

    setNotLogIn(){
      //form

      //setCookie
      document.cookie = 'notName='+document.querySelector('form').querySelector('input[name="notName"]').value
      document.cookie = 'notEmail='+document.querySelector('form').querySelector('input[name="notEmail"]').value
      console.log(document.cookie)

      //window.parent.document
      window.parent.location.reload()
    },
}
