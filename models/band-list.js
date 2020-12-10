const Band = require("./band");


class BandList {

    constructor(){
        this.bands = [
            new Band('El Alfa'),
            new Band('Don Omar'),
            new Band('Bryan Mayer'),
            new Band('Tengo Calderon'),
            new Band('La Melaza'),
        ]
    }

    addNewBand(name){
        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;
    }


    deleteBand(id){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    getBands(){
        return this.bands;
    }

    increaseVotes(id){
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.votes+=1;
            }
            return band;
        })
    }

    changaBandName(id, newName){
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.name = newName;
            }
            return band;
        })
    }
}

module.exports = BandList;