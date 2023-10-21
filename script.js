    //função de somar
    function somar(){
        let n1 = document.querySelector('.n1')
        let n2 = document.querySelector('.n2')
        document.querySelector(".resMeio").innerHTML = `
        <p>+</p>
        `
        n1 = Number(n1.value)
        n2 = Number(n2.value)
        let res = (n1 + n2).toFixed(2)        
        document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}<span>`
    }

    //função de multiplicar
    function multiplicar(){
        let n1 = document.querySelector('.n1')
        let n2 = document.querySelector('.n2')
        document.querySelector(".resMeio").innerHTML = `
        <p>X</p>
        `
        n1 = Number(n1.value)
        n2 = Number(n2.value)
        let res = (n1 * n2).toFixed(2)
        document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}<span>`
    }
    
    //função de dividir
    function dividir(){
        let n1 = document.querySelector('.n1')
        let n2 = document.querySelector('.n2')
        document.querySelector(".resMeio").innerHTML = `
        <p>/</p>
        `
        n1 = Number(n1.value)
        n2 = Number(n2.value)
        let res = (n1 / n2).toFixed(2)
        document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}<span>`
    }

    //função de subtrair
    function subtrair(){
        let n1 = document.querySelector('.n1')
        let n2 = document.querySelector('.n2')
        document.querySelector(".resMeio").innerHTML = `
        <p>-</p>
        `
        n1 = Number(n1.value)
        n2 = Number(n2.value)
        let res = (n1 - n2).toFixed(2)
        document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}<span>`
    }

    //adicionando o DOMContentLoaded para poder carregar tudo certinho o codigo e criando a o evento click adicionando as funções a ele
    document.addEventListener("DOMContentLoaded", ()=> {
        document.querySelector(".but_somar").addEventListener('click',somar)
        document.querySelector(".but_multiplicar").addEventListener('click',multiplicar)
        document.querySelector(".but_dividir").addEventListener('click',dividir)
        document.querySelector(".but_subtrair").addEventListener('click',subtrair)
    })






    /*    document.querySelector(".but_somar").addEventListener('click', ()=>{
        somar();
    })})*/
        //{
        // let n1 = parseFloat(document.querySelector('.n1').value)
        // let n2 = parseFloat(document.querySelector('.n2').value)
        // if((isNaN(n1)) || ((isNaN(n2)))){ 
        //     document.querySelector('.resMeio').innerHTML = `
        //     <p>Digite os valores corretos</p>
        //     `
        // } else {
        // document.querySelector(".resMeio").innerHTML = `
        // <p>+</p>
        // `
        // let res = n1 + n2
        // document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}</span>`
     //}
     

//     //Função de click no botão de multiplicar
//     document.querySelector(".but_multiplicar").addEventListener('click', ()=>{
//         let n1 = parseFloat(document.querySelector('.n1').value)
//         let n2 = parseFloat(document.querySelector('.n2').value)
//         if((isNaN(n1)) || ((isNaN(n2)))){
//             document.querySelector('.resMeio').innerHTML = `
//             <p>Digite os valores corretos</p>
//             `
//         } else {
//         document.querySelector(".resMeio").innerHTML = `
//         <p>x</p>
//         `
//         let res = n1 * n2
//         document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}</span>`
//     }})

//     //Função de click no botão de dividir
//     document.querySelector(".but_dividir").addEventListener('click', ()=>{
//         let n1 = parseFloat(document.querySelector('.n1').value)
//         let n2 = parseFloat(document.querySelector('.n2').value)
//         if((isNaN(n1)) || ((isNaN(n2)))){
//             document.querySelector('.resMeio').innerHTML = `
//             <p>Digite os valores corretos</p>
//             `
//         } else {
//         document.querySelector(".resMeio").innerHTML = `
//         <p>/</p>
//         `
//         let res = n1 / n2
//         res = res.toFixed(2)
//         document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}</span>`
//     }})

//     //Função de click no botão de subtrair
//         document.querySelector(".but_subtrair").addEventListener('click', ()=>{
//         let n1 = parseFloat(document.querySelector('.n1').value)
//         let n2 = parseFloat(document.querySelector('.n2').value)
//         if((isNaN(n1)) || ((isNaN(n2)))){
//             document.querySelector('.resMeio').innerHTML = `
//             <p>Digite os valores corretos</p>
//             `
//         } else {
//         document.querySelector(".resMeio").innerHTML = `
//         <p>-</p>
//         `
//         let res = n1 - n2
//         res = res.toFixed(2)
//         document.querySelector('.res').innerHTML = `O resultado é <span class="span1">${res}</span>`
//     }})
// }