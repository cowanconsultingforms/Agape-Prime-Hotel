import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
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
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          value={name}
          onChange={onChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className="w-full p-2 border rounded"
            required
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2 cursor-pointer"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
