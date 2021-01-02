import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDHp8j8NZYS7ZPk1vY4pb3Hj3xshKpIMag",
	authDomain: "crwn-db-2460b.firebaseapp.com",
	projectId: "crwn-db-2460b",
	storageBucket: "crwn-db-2460b.appspot.com",
	messagingSenderId: "446579148530",
	appId: "1:446579148530:web:fe8abc9758b44ece4ef26b",
	measurementId: "G-KT0Q5HK2LH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => 
{
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists)
	{
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try 
		{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		}
		catch(e)
		{
			console.log("error creating user ", e.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
