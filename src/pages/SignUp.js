import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase"; 
import { db } from "../firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginSignup from "../components/LoginSignup";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (action === "Sign Up") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name,
        });

        const userData = {
          name,
          email,
          timestamp: serverTimestamp(),
        };

        await setDoc(doc(db, "users", user.uid), userData);
        toast.success("Registration successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
      }

      navigate("/");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <LoginSignup
      action={action}
      setAction={setAction}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUp;
