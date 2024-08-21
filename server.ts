import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/series", (req, res) => {
    res.render("series");
});

app.get("/films", (req, res) => {
    res.render("films");
});

app.get("/list", (req, res) => {
    res.render("mylist");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.listen(app.get("port"), async () => {
    console.log(`Server is running on port ${app.get("port")}`);
});
