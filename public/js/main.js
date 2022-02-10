const getProducts = async function (url) {
    const response = await fetch(url)
    // console.log(response);
    const products = await response.json()
    return products
}
// products n'est utilisé que dans le scope, il faut donc le redefinir à nouveau

const products = await getProducts("http://localhost:3000/products")
let html = ''
html += `<table>`
html += `<tr>`
for (const key of Object.keys(products[0])) {
    // (products[0]) signifie ici d'aller selectionner seulement les keys de l'element à l'indice 0
    html += `<th>${key}</th>`
    console.log(key);
}
html += `</tr>`
for (const value of Object.values(products)) {
    // Contrairement au for keys, on mettra .values(products)
    // car le but est de selectionner tous les values.
    console.log(value);
    html += `<tr>`
    html += `</tr>`
}
html += `</table>`























// fetch("http://localhost:3000/products")
//     .then(function (response) {
//         console.log(response);
//         if (response.ok) {
//             response.json().then(function (products) {
//                 console.log(products);
//                 let html = ''
//                 html += `<table>`
//                 html += `<tr>`
//                 for (const key of Object.keys(products[0])) {
//                     html += `<th>${key}</th>`
//                 }
//                 html += `</tr>`
//                 for (const product of products) {
//                     html += `<tr>`
//                     // console.log(product);
//                     for (const value of Object.values(product)) {
//                         html += `<td>${value}</td>`
//                     }
//                     html += `</tr>`
//                 }
//                 html += `</table>`
//             })
//         }
//     })