import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <section id="error-page">
      <Alert variant="danger">
        <Alert.Heading>Sorry, we couldn't find that page.</Alert.Heading>
        <p>Let's get you back to the home page.</p>
      </Alert>

      <Button variant="secondary">
        <Link to="/">Back Home</Link>
      </Button>
    </section>
  );
};

export default ErrorPage;
