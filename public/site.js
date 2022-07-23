const socket = io({
    withCredentials: true
});

socket.on("connect", () => {
    // either with send()
    socket.send("Hello!");
});

socket.on("message", data => {
    console.log(data);
  });