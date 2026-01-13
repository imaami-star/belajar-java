
// DOM SELECTION PART 1 
// //document.getElementsbyId
// //element
// const  judul = document.getElementById('judul');
// judul.style.color = 'red';

// //document.getElementsBytagName()
// //HTMLCollection
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByName('h1')[0];
// h1.style.fontSize = '50px';

// //document.getElementsByClassName()
// //HTMLCollection 

// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = "ini di ubah dari javascript";



// //DOM SELECTION 2 
// // document.querySelector()
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector ('section#b ul li:nth-child(2)');
// li2.style.backgroundCOlor = 'orange';

// const p = document.querySelector('p');

//document.querySelectorAll() 

// const judul = document.getElementById('judul');

// judul.innerHTML = '<marquee>ima</marquee>';


//DOM MANIPULATION PART 2 

// // buat elemen baru 
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('paragraf baru ');

// // simpan tulisan ke dalam paragarf 
// pBaru.appendChild(teksPBaru); // simpan ke akhir elemen parent 

// //simpan pBaru di akhir section A 
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);




// //node insertbefore

// const libaru = document.createElement('li');                    // tempat 
// const teksLibaru = document.createTextNode('item baru');        // isi 

// libaru.appendChild(teksLibaru);                                 //

// const ul = document.querySelector('section#b ul ');
// const li2 = ul.querySelector(' li:nth-child(2)');

// //queryselector di pakai ketika dia ga punya ID da ga punya kelas 

// ul.insertBefore(libaru, li2);

// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// //replacechild

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// // kenapa sectionB tidak document? karna js akan mencari dari atas bukan dan akan mengmbil elemen yang salah bukan yang di maksud yaitu yang berada di section b itu sendiri 


// const h2baru = document.createElement('h2');
// const teksh2Baru = document.createTextNode('judul baru');

// h2baru.appendChild(teksh2Baru);


// // ambil parent.lalureplace(node baru, node lama)
// sectionB.replaceChild(h2baru, p4);


//DOM EVENTS 
// event handler 
const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue';
// }

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

// event addEventsListener 
const p4 = document.querySelector('.p4');
p4.addEventListener('click', function (){
    
})