import Axios from "./Base_url";

const SignUp = (user) => {
  Axios.post("/api/v1/auth/register", user). // sending user data
  then((response) => response.json());
};

export default SignUp;

// after returning we will get data interm of responseS
