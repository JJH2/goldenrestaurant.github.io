const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const database = firebase.database();



async function authSign() {
    const result = await auth.signInWithPopup(provider);
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
}

const loginBtn = document.querySelector('.login');
loginBtn.addEventListener('click', e => {
    authSign();
})

