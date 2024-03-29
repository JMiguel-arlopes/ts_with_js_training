import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
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
  };

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
        <p>Cadastre-se</p>
      </section>
    </>
  );
}

export default App;
