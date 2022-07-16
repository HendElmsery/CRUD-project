var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescribtionInput = document.getElementById('productDescribtionInput');
var productList;
if (localStorage.getItem('myproduct') !=null){
 productList =JSON.parse(localStorage.getItem("myproduct"));
    displayProducts()
}
else{
    productList= [];
}
function addProduct(){
    var product = {
       name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescribtionInput.value,
    }
    productList.push(product);
    clearForm();
    displayProducts();
    localStorage.setItem("myproduct",JSON.stringify(productList))
}
function clearForm(){
    productNameInput.value= ""
    productPriceInput.value= ""
    productCategoryInput.value= ""
    productDescribtionInput.value= ""
}
function displayProducts(){
    var cartona =""
    for (var i=0 ; i <productList.length ;i++){
         cartona += `
            <tr>
         <td>${i +1}</td>
         <td>${productList[i].name}</td>
         <td>${productList[i].price}</td>
         <td>${productList[i].category}</td>
         <td>${productList[i].desc}</td>
         <td>
             <button class="btn btn-warning">update</button>
            
         </td>
         <td> <button class="btn btn-danger" onclick="deleteProduct(${i})">delete</button></td
         </tr>`
         
    }
       document.getElementById('tablebody').innerHTML = cartona     
    
};
function deleteProduct(index){
    productList.splice(index,1)
    localStorage.setItem("myproduct",JSON.stringify(productList))
    displayProducts()
}