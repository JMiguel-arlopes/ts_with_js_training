import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import Input from "./components/Input";
import Submit from "./components/Submit";
import Form from "./components/Form";

function App() {
  interface userSchema {
    name: string;
    email: string;
    password: string;
  }

  const [user, setUser] = useState<userSchema>({
    name: "",
    email: "",
    password: "",
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser({ ...user!, [name]: value });
    console.log(user);
  };

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(user!);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section className="container">
        <Form onChangeText={onChangeText} submit={submit} user={user} />
      </section>
    </>
  );
}

export default App;
