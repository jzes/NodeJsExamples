var imapEmail = require('imap-simple')

var config = {
  imap: {
    user: 'laudos2@policlinicabauru.com.br',
    password: 'laudos@poli',
    host: 'email-ssl.com.br',
    port: '993',
    tls: true,
    authTimeout: 3000
  }
}

imapEmail.connect(config).then(function (con) {
  console.log('veio')
  con.openBox('INBOX').then(function () {
    console.log('abriu a caixa')
  })
}).catch(function (err) { console.log(err) })
