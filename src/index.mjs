import { env } from "cloudflare:workers";

export default {
  fetch(request, env, ctx) {
    return new Response(JSON.stringify({req:request, env:env, ctx:ctx}));
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
