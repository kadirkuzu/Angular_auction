const io = require('socket.io')(2000, {
  cors: {
    origin: ["http://localhost:4200"],
  }
})
io.on('connection', socket => {
  console.log(socket.id + " connected")
    socket.on("try",yazi=> {
    socket.broadcast.emit("changePrice",yazi)
      socket.emit("changePrice",yazi)
  })

  socket.on("addOffers",data=>{
    socket.emit("addOfferss",{price:data.price,userName:data.userName})
    socket.broadcast.emit("addOfferss",{price:data.price,userName:data.userName})
  })





})





















