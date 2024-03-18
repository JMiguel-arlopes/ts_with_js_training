import { useState, ChangeEvent } from "react";
import "./App.css";
import Input from "./components/Input";
import Submit from "./components/Submit";

function App() {
  interface userSchema {
    name: string;
    email: string;
    paas: string;
  }

  const [user, setUser] = useState<userSchema>();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const submit = (e: any): void => {
    e.preventDefault();
    console.log(user);
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
            onTextChange={onChangeText}
          />
          <Input
            label="Email"
            name="Email"
            type="email"
            placeholder="jmigul@gmail.com"
            maxLength={256}
            onTextChange={onChangeText}
          />
          <Input
            label="password"
            name="password"
            type="password"
            placeholder="John senna"
            maxLength={256}
            onTextChange={onChangeText}
          />
          <Submit text="Cadastro" />
        </form>
      </section>
    </>
  );
}

export default App;
