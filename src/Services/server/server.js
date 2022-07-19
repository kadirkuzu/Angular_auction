const io = require('socket.io')(2000, {
  cors: {
    origin: ["http://localhost:4200"],
  }
})
io.on('connection', socket => {
  console.log(socket.id + " connected")
  socket.on("addOffers", data => {
    socket.emit("addOfferss", {price: data.price, userName: data.userName,pageUrl:data.pageUrl})
    socket.broadcast.emit("addOfferss", {price: data.price, userName: data.userName,pageUrl:data.pageUrl})
  })
  socket.on("addNewAuctionMessage", message => {
    socket.broadcast.emit("addAuctionMessage", message)
    socket.emit("addAuctionMessage", message)
  })
  socket.on("listenChangePrice",data=>{
    socket.emit("changePrice",{id:data.id,price:data.price})
    socket.broadcast.emit("changePrice",{id:data.id,price:data.price})
  })


})





















