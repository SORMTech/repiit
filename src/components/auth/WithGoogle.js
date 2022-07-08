import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc'

function WithGoogle() {
  const auth = getAuth();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        if (result) {
          // This gives a Google Access Token. It can be used to access the Google API.
          //   const credential = GoogleAuthProvider.credentialFromResult(result);
          //   const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("google user", user)

          const isCustomer = await axios
            .get(`/api/users?id=${user.uid}`)
            .catch((err) => {
              console.log("Error getUser Call >>>", err);
              return err
            });
          
          console.log('isCustomer >>>', isCustomer)

          if (!isCustomer.data.success) {
            const data = { _id: user.uid, name: user.displayName, email: user.email, emailVerified: user.emailVerified, photoURL: user.photoURL }
            const res = await axios('/api/users', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .catch(error => {
                console.log("Error from /api/users POST-req >>", error)
              })

            console.log("Response from create user /api/users POST-req", res)
          }
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Error at signInWithPopup >>", error)
      });
  }

  return (<>
    <div onClick={handleSignIn} className="flex items-center gap-1 py-1 px-2 cursor-pointer bg-white text-[#F28A13] text-xs">
      <FcGoogle />
      <div>Sign In With Google</div>
    </div>

  </>)
}

export default WithGoogle
