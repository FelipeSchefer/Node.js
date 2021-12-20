const fs = require('fs')

const requestHandler = (req, res) => {
 const url = req.url
 const method = req.method
 
 if (url === '/') {
  res.write('<html>')
  res.write('<head><title>CHALLENGE ACCEPTED</title></head>')
  res.write('<body>')
  res.write('<h1>Welcome you are on "/" path </h1>')
  res.write('<form action="/creat-user" method="POST">')
  res.write('<input type="text" name="username">')
  res.write('<button type="submit">Submit</button>')
  res.write('</form>')
  res.write('</body>')
  res.write('</html>')
  return res.end()  
 }

 if (url === '/' && method ==='POST') {
  const body = []
  req.on('data', (chunk) => {
   body.push(chunk)
  })
  req.on('end', ()=>{
   const parsedBody = Buffer.concat(body).toString()
   const message = parsedBody.split('=')[1]
   fs.writeFile('message.txt', message, err =>{
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
   })
  })
 }

 if (url === '/user') {
  res.write('<html>')
  res.write('<head><title>YOU POSTED</title></head>')
  res.write('<body>')
  res.write('<ul><li> 1 </li><li> 2 </li></ul>')
  res.write('</body>')
  res.write('</html>')
 }
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><title>My First Page</title><head>');
 res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
 res.write('</html>');
 res.end();
}

exports.challenge = requestHandler