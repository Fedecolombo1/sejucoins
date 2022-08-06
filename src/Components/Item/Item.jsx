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
    let usuarios = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    let usuariosOrdenados = usuarios.sort(function(a, b){return a.numTribu - b.numTribu});
    setUsers(usuariosOrdenados);
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
      let usuarios = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      let usuariosOrdenados = usuarios.sort(function(a, b){return a.numTribu - b.numTribu});
      setUsers(usuariosOrdenados);
    };

    getUsers();
  }, []);


  return (
    <>
    <div className="col-12">
      <div className="row">
        {users.map((user) => {
              if(user.rol !== "admin"){
                return (
                <div className="product col-11 col-lg-4 col-xl-2 col-md-4 row align" key={user.id}>
                  {" "}
                  <h1 className="col-12 titulo">Tribu {user.numTribu}</h1>
                  <h1 className="col-12 titulo">{user.email}</h1>
                  <h1 className="col-12 titulo">SejuCoins: {user.coins}</h1>
                  <button className="botonC"
                    onClick={() => {
                      sumar(user.id, user.coins);
                    }}
                  >
                    {" "}
                    Sumar
                  </button>
                  <button className="botonC"
                    onClick={() => {
                      restar(user.id, user.coins);
                    }}
                  >
                    {" "}
                    Restar
                  </button>
                </div>
                );
              }
          })}
      </div>
    </div>
    </>
  );
};

export default Item;
