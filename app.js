import express from "express"
import {fileURLToPath} from "node:url"
import {dirname,join} from "node:path"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = join(__dirname,"static/index.html")
const PORT = process.env.PORT || 3000

app.use(express.static(join(__dirname, "static")))
app.get("/", function(req,res){
    if(!req.accepts(["html","text/html"])){
       return  res.status(406).send("Not Acceptable")
    }

     res.sendFile(filePath)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});