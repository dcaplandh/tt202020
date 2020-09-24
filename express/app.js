const express = require('express');
const app = express();
const routes = require('./routes');

app.listen(3000,()=>console.log("Server prendido en puerto 3000"));

app.get("/home",routes.home);

app.get("/about-us",routes.aboutUs);

app.get("/delivery",routes.delivery);

app.get("/contact",routes.contact);

app.get("*",routes.notFound);