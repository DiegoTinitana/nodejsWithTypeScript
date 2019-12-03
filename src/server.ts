import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as logs from 'morgan'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(logs('combined'))

app.listen(8000, () => console.log('Server running on 8000!'))