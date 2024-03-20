import { FunctionComponent } from "react";
import Input from "../Input";
import Submit from "../Submit";
import styles from "./form.module.css";

interface userSchema {
  name: string;
  email: string;
  password: string;
}

interface FormProps {
  submit: (e: any) => void;
  user: userSchema;
  onChangeText(e: any): void;
}

const Form: FunctionComponent<FormProps> = ({ submit, user, onChangeText }) => {
  return (
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
  );
};

export default Form;
