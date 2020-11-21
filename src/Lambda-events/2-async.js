const checkAuth = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const getUser = (auth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (auth) {
        resolve({name: 'Max'});
      } else {
        reject('Not logged in!');
      }
    }, 2000);
  });
};

async function fetchUser() {
  const auth = await checkAuth(); // <- async operation
  const user = await getUser(auth); // <- async operation
  return user;
}

fetchUser().then((user) => console.log(user.name));
