import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";

function Login() {
  return (
    <Card>
      <h2>Login</h2>

      <Input placeholder="Email" />
      <Input placeholder="Password" />

      <Button>Login</Button>
    </Card>
  );
}

export default Login;