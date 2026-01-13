// belajar this

//cara 1 - function declaration 
function halo (){
    console.log('halo');
}

this.halo();
// this mengembalikkan object global 

// cara ke 2 - object literal

var obj = { a : 10, nama : 'anu'};
obj.halo = function(){
    console.log(this);
    console.log('halo');
}
obj.halo();

//this mengembalikkan object yang bersangkutan 


// cara 3 - constructir 
function Halo(){
    console.log(this);
    console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();
// mengembalikkan object yang baru di buat 