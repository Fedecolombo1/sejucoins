import { React, useEffect, createContext, useState } from "react";
import "./Item.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import firebaseApp from '../../firebase/credenciales'
import { collection, getFirestore, doc, updateDoc, getDocs } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const Item = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(firestore, "usuarios");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const sumar = async(id, coins) =>{
    const userDoc = await doc(firestore, "usuarios", id);
    const newFields = {coins : coins + 1}
    getUsers();
    await updateDoc(userDoc, newFields)
  }

  const restar = async(id, coins) =>{
    const userDoc = await doc(firestore, "usuarios", id);
    const newFields = {coins : coins - 1}
    getUsers();
    await updateDoc(userDoc, newFields)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);


  return (
    <>
    <div className="row align">
        {users.map((user) => {
          return (
              <div className="product col-11 col-lg-4 col-xl-2 col-md-4 row align" key={user.id}>
                {" "}
                <h1>Name: {user.email}</h1>
                <h1>SejuCoins: {user.coins}</h1>
                <button
                  onClick={() => {
                    sumar(user.id, user.coins);
                  }}
                >
                  {" "}
                  Sumar
                </button>
                <button
                  onClick={() => {
                    restar(user.id, user.coins);
                  }}
                >
                  {" "}
                  Restar
                </button>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Item;
