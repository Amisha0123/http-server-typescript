import * as net from "net"; //used to create tcp servers and clients

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this to pass the first stage
// const server = net.createServer((socket) => {
//   //creates a new TCP server and takes a callbackfunction (event listener)
//   socket.write(Buffer.from(`HTTP/1.1 200 OK\r\n\r\n`)); //uses write method to send data to the client which is a valid string and converts it into Buffer because the underlying TCP socket deals with binary data.
//   socket.end();
// });

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const dataS = data.toString();
    const arr = dataS.split(" ");
    const ans = arr[1];
    if (ans === "/") {
      socket.write(`HTTP/1.1 200 OK \r\n\r\n`);
    } else {
      socket.write(`HTTP/1.1 404 Not Found \r\n\r\n`);
    }
    socket.end();
  });
});

server.listen(4221, "localhost");
