import express from 'express';
const app = express();
app.get('/db/model', async (req, res)=>{
    const { name  } = req.query;
    if (!name) {
        res.status(500).json({
            error: true,
            message: 'no valid params or model name given !'
        });
    }
    res.json({
        query: req.query
    });
});
