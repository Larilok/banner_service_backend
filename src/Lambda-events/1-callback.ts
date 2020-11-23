interface ICallback<T1, T2 = void> {
  (error: null|Error, param?: T1): T2
}

const checkAuth1 = (callback: ICallback<{ isAuth:boolean }>): void => {
  // In reality, you of course don't have a timer but will probably reach out to a server
  setTimeout(() => {
    callback(null, { isAuth: true })
  }, 2000)
}

const getUser1 = (authInfo: { isAuth: boolean }, callback: ICallback<{ name:string }>):void => {
  if (!authInfo.isAuth) {
    callback(new Error('Not auth'))
    return
  }
  setTimeout(() => {
    callback(null, { name: 'Max' })
  }, 2000)
}

checkAuth1((err, authInfo) => {
  if (err) throw err
  getUser1(authInfo, (err, user) => {
    if (err) throw err
    console.log(user)
    console.log(user.name)
  })
}
