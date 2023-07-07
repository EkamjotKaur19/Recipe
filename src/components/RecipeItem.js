import React, {useState} from 'react'
import Dialog from './Dialog';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { getFirestore, collection, doc, setDoc,  arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RecipeItem(props) {
  const location = useLocation();
  const [user] = useAuthState(auth);
    const [Open, setOpen] = useState(false)
    let {recipe} = props;
    console.log(recipe)
    const navigate = useNavigate()
    const handleOpen = () => {
        setOpen(!Open)
    }

    const handleWish = async () => {
      if (user) {
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        console.log(userRef)
        await setDoc(userRef, {
          uid:user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          wishlist: arrayUnion(recipe)
        });
        alert("Recipe added to  Saved!");
      } else {
        alert('You have to LogIn to save Favourite recipes')
        navigate('/login')
      }
    }
    const handleNotWish = async () => {
      if (user) {
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
          uid:user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          wishlist: arrayRemove(recipe)
        });
        alert("Recipe removed from Saved!");
        window.location.reload();

      } else {
        alert('You have to LogIn to save Favourite recipes')
        navigate('/login')
        console.log("User not logged in.");
      }
    }

  return (
    <>
        <div className="recipe">
            <img src={recipe.image} alt=""  />
            <span className="dishName">{recipe.label}</span>
            <div className="ing" onClick={() => handleOpen()}>Ingredients</div>
            <span className="see" onClick={() => window.open(recipe.url)}>See Recipe</span>
            {location.pathname === '/savedpage' ? (
        <button className="wish" onClick={handleNotWish}>
          Remove from Saved
        </button>
      ) : <button className="wish" onClick={handleWish}>
      Add to Saved
    </button> }
        </div>

        {Open &&  <>
            <Dialog recipe={recipe} />
        </>
        }


    </>
  )
}
