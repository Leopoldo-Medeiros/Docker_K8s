const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let userGoal = 'Learn Docker!';

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My Node App</title>
                <link rel="stylesheet" type="text/css" href="/styles.css">
            </head>
            <body>
                <section>
                    <h2>My Course Goal</h2>
                    <h3>${userGoal}</h3>
                </section>
                <form action="/store-goal" method="POST">
                    <div class="form-control">
                        <input type="text" name="goal" />
                    </div>
                    <button type="submit">Set Course Goal</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/store-goal', (req, res) => {
    const enteredGoal = req.body.goal;
    console.log(enteredGoal);
    userGoal = enteredGoal;
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});