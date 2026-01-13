function pilihComputer (){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function hasil(comp, player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function compPikir() {
    const putarImg = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const mulai = new Date().getTime();

    const interval = setInterval(function () {
        if (new Date().getTime() - mulai > 1000) {
            clearInterval(interval);
            return;
        }

        putarImg.setAttribute('src', 'img/' + gambar[i++] + '.png');

        if (i === gambar.length) {
            i = 0;
        }
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = pilihComputer();
    const pilihanPlayer = pil.className;
    const hasil = hasil(pilihanComputer, pilihanPlayer);
    
    compPikir();

    setTimeout(function(){
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
    }, 1000)
    
    });
});



// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function(){
//     const pilihanComputer = pilihComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasilAkhir = hasil(pilihanComputer, pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/'+ pilihanComputer +'.png');

//     const tampilHasil = document.querySelector('.info');
//     tampilHasil.innerHTML = hasilAkhir;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function(){
//     const pilihanComputer = pilihComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasilAkhir = hasil(pilihanComputer, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/'+pilihanComputer+'.png');

//     const tampilHasil = document.querySelector('.info');
//     tampilHasil.innerHTML = hasilAkhir;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function(){
//     const pilihanComputer = pilihComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasilAkhir = hasil(pilihanComputer, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/'+pilihanComputer+'.png');

//     const tampilHasil = document.querySelector('.info');
//     tampilHasil.innerHTML = hasilAkhir;
// });