class constants {
    constructor(){
        this.r="release/";
        this.av="AutoValidate";
        this.blue=this.r+"devblue/"+this.av;
        this.green=this.r+"greenacre/";
        this.self=this.r+"devnnekkan/"+this.av;
        this.dev="develop";
        this.rel = "rc/DEPLOYMENT-";
    }
}
module.exports = new constants();