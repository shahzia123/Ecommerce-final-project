export function createUser(userData) {
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
      const response = await fetch('http://localhost:8080/auth/createUser',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      }) 
      const data = await response.json()
      resolve({data})
    }
    );
  }
  
  
  export function checkUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8080/auth/loginUser', {
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.json();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
      // TODO: on server it will only return some info of user (not password)
    });
  }

  export function updateUser(update) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8081/users/'+update.id, {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      // TODO: on server it will only return some info of user (not password)
      resolve({ data });
    });
  }
  export function signOut(userId) {
    return new Promise(async (resolve) => {
      // TODO: on server we will remove user session info
      resolve({ data: 'success' });
    });
  }