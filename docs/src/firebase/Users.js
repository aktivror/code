import firebaseInit from '../plugins/firebaseInit';

var firebase = new firebaseInit();

const createUser = (name, status, text, level) => {
    if(name){
    firebase.database.ref('Users/' + name).set({
        status,
        text,
        level
      });
    }
};


const getUsers = () => {
    var userRef = firebase.database.ref('Users');
    return userRef;
};

export {
    getUsers,
    createUser
}