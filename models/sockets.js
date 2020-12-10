const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvent();

    this.bandList = new BandList();
  }

  socketEvent() {
    // On event
    this.io.on("connection", (socket) => {
        let num = 1;
        let count = ++num;
      console.log("cliente conectado.",count );
      // Emitir al cliente conectado
      socket.emit("currents-brand", this.bandList.getBands());

      // Vote band
      socket.on("band-votes", (data) => {
        this.bandList.increaseVotes(data.id);
        this.io.emit("currents-brand", this.bandList.getBands());
      });

      // Delete band
      socket.on("delete-band", (data) => {
        this.bandList.deleteBand(data.id);
        this.io.emit("currents-brand", this.bandList.getBands());
      });

      // Change Name
      socket.on("change-name-band", (data) => {
        this.bandList.changaBandName(data.id, data.name);
        this.io.emit("currents-brand", this.bandList.getBands());
      });

      // Create Band Name
      socket.on("create-new-band", (data) => {
        this.bandList.addNewBand(data.name);
        this.io.emit("currents-brand", this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
