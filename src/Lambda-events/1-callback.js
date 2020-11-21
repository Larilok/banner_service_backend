const checkAuth = cb => {
  // In reality, you of course don't have a timer but will probably reach out to a server
  setTimeout(() => {
    cb({ isAuth: true })
  }, 2000)
}

const getUser = (authInfo, cb) => {
  if (!authInfo.isAuth) {
    cb(null)
    return
  }
  setTimeout(() => {
    cb({ name: 'Max' })
  }, 2000)
}

checkAuth(authInfo => {
  getUser(authInfo, user => {
    console.log(user.name)
  })
})