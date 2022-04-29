import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
  res.send(`
  <form method="POST">
    <div>
        <label>Email</label>
        <input name = "email"/>
        <br/>
        <br/>
        <label>Password</label>
        <input name = "password"/>
    </div>
  </form>
  `);
});

export { router };
