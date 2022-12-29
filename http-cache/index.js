const express = require('express')
const path = require('path')
const app = express()
const port = 8081

const opts = {
    // 协商缓存
    etag: true,
    lastModified: true,

    setHeaders: function (res, path, stat) {
        // 强缓存
        res.set('Cache-Control', 'public, max-age=15')
    }
}
app.use('/static', express.static(path.join(__dirname, 'static'), opts))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})