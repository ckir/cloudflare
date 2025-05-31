import { env } from "cloudflare:workers";

export default {
  fetch(req) {
    return new Response(sayHello());
  },
};

// env is not an argument to sayHello...
function sayHello() {
  let myName = getName();
  return `Hello, ${myName}`;
}

// ...nor is it an argument to getName
function getName() {
  return env.MY_NAME;
}
