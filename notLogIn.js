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
      console.log(document.cookie)

      //window.parent.document
      window.parent.location.reload()
    },
}
