const checkAuth = callback => {
  // In reality, you of course don't have a timer but will probably reach out to a server
  setTimeout(() => {
    callback(null, { isAuth: true })
  }, 2000)
  return 'Value'
}

const getUser = (authInfo, callback) => {
  if (!authInfo.isAuth) {
    callback(new Error('Not auth'))
    return
  }
  setTimeout(() => {
    callback(null, { name: 'Max' })
  }, 2000)
}

const res = checkAuth((err, authInfo) => {
  if (err) throw err
  getUser(authInfo, (err, user) => {
    if (err) throw err
    console.log(user)
    console.log(user.name)
  })
})

console.dir({ res })