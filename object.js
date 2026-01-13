// membuat object 
// object literal 

var mhs = {
    nama : 'ahy',
    nrp : '013847983',
    email : 'ahy@gmail.com',
    jurusan : 'rpl'
}

var mhs = {
    nama : 'ahay',
    nrp : '013847983',
    email : 'ahay@gmail.com',
    jurusan : 'rpl'
}

// Function declaration 

function obmhs(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan ;

    return mhs;
}

var mhs3 = obmhs('gbla', '9023747', 'gb@gmail.com', 'rpl');



// constructur 
 function Mahasiswa (nama,nrp,email,jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
 }

 var mhs4 = new Mahasiswa('erik', '28323923', 'erik@gmail.com', 'rpl');