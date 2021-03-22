import api from '..'

function _hello() {
  return api({
    method: 'GET',
    url: '/user'
  })
}

interface LoginData {
  username: string,
  password: string
}

function _login(loginData: LoginData) {
  return api({
    method: 'POST',
    url: '/user/login',
    data: loginData
  })
}

export { _hello, _login }