let miFuncion1 = function (a) {
    return a;
}
let miFuncion1F = a => a;

let miFuncion2 = function (a: number, b: number) {
    return a + b;
}
let miFuncion2F = (a: number, b: number) => a + b;
console.log(miFuncion1("Normal"));
console.log(miFuncion1F("Flecha"));
console.log(miFuncion2(5,9));
console.log(miFuncion2F(5,9));

let hulk = {
    nombre: "Hulk",
    aplastar(){
        setTimeout( () => {
            console.log(this.nombre + " aplasta!");
        },1500)
    }

}
hulk.aplastar();

