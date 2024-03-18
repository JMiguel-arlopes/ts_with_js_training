import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import Input from "./components/Input";
import Submit from "./components/Submit";

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
        <form className="form" onSubmit={submit}>
          <Input
            label="Nome"
            name="name"
            type="text"
            placeholder="John senna"
            maxLength={256}
            value={user!.name}
            onTextChange={onChangeText}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="jmigul@gmail.com"
            maxLength={256}
            value={user!.email}
            onTextChange={onChangeText}
          />
          <Input
            label="password"
            name="password"
            type="password"
            placeholder="John senna"
            maxLength={256}
            value={user!.password}
            onTextChange={onChangeText}
          />
          <Submit text="Cadastro" />
        </form>
      </section>
    </>
  );
}

export default App;
