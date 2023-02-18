import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext({user: 'Gunjan', setUser: () => {}});

function AuthContextProvider({children}) {
  const [user, setUser] = useState('Gunjan');

  function SetUser(user) {
    console.log('first', user);
    return setUser(user);
  }

  //   useEffect(() => {
  //     fetch('api')
  //       .then(data => {
  //         if (data.ok) {
  //           console.log(data.json());
  //           //   return data.json();
  //         } else {
  //           console.log('error');
  //         }
  //       })
  //       .catch(err => console.log('error', err));
  //   }, []);

  const value = {user: user, setUser: SetUser};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
