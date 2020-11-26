interface ICallback<T1, T2 = void> {
  (error: Error, param?: T1): T2
}

interface IAuthInfo {
  isAuth: boolean
}

interface IUser {
  name: string
}

const checkAuth1 = (callback: ICallback<IAuthInfo>): void => {
  // In reality, you of course don't have a timer but will probably reach out to a server
  setTimeout(() => {
    callback(null, { isAuth: true })
  }, 2000)
}

const getUser1 = (authInfo: IAuthInfo, callback: ICallback<IUser>):void => {
  if (!authInfo.isAuth) {
    callback(new Error('Not auth'))
    return
  }
  setTimeout(() => {
    callback(null, { name: 'Max' })
  }, 2000)
}

checkAuth1((err: Error, authInfo: IAuthInfo) => {
  if (err) throw err
  getUser1(authInfo, (err: Error, user: IUser) => {
    if (err) throw err
    console.log(user)
    console.log(user.name)
  })
})
