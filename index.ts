import Router from "./Router";

const router = new Router();

router.get("/test", () => {
  return "GET OK";
});

router.post("/test", () => {
  return "POST OK";
});


