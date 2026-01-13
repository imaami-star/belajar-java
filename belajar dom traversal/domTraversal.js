// // event handling 

// // const close = document.querySelector('.close');
// // const card = document.querySelector('.card');

// // close.add
// // addEventListener('click', function(){
// //     card.style.display = 'none';
// // });

// //DOM TRAVERSAL 

// const close = document.querySelectorAll('.close');
// // const card = document.querySelectorAll('.card');

// // for( let i = 0;  i < close.length; i++){
// //     close[i].addEventListener('click', function(e){
// //         // close[i].parentElement.style.display = 'none';
// //         e.target.parentElement.style.display = 'none' ;

// //     })
// // };


// // kalo forEach ga perlu nentuin iterator
// close.forEach(function (el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation(); // untuk menghentikan fungsi yang ada di bawah karna close sebagian dari card juga 
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// });





// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);
// //parentElement, nextElementsibling, previousElementSibling

//CARA YANG LEBIH EFISIEN 
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    // console.log(e.target);
    if (e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});