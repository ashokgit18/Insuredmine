const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Welcome to Insuredmine</title>
      <style>
        body {
          background: linear-gradient(135deg, #e3f2fd, #90caf9);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .box {
          background: white;
          padding: 40px 60px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        h1 {
          color: #0d47a1;
          font-size: 32px;
          margin-bottom: 10px;
        }
        p {
          color: #1565c0;
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Hello Ashok! 👋</h1>
        <p>Welcome to <strong>Insuredmine</strong> 🚀</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
