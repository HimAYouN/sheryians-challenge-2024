var products = [
    {name: "White Chair", headline: "bring cloudness at your home", price: "14000", img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Master Chair", headline: "The only chair, grandpa likes", price: "19000", img:"https://images.unsplash.com/photo-1601392740426-907c7b028119?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Corner Chair", headline: "For that lonely Kid", price: "12000", img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var popularProducts = [
    {name: "White Chair", headline: "bring cloudness at your home", price: "14000", img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Master Chair", headline: "The only chair, grandpa likes", price: "19000", img:"https://images.unsplash.com/photo-1601392740426-907c7b028119?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Corner Chair", headline: "For that lonely Kid", price: "12000", img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var cart =[];
function addProducts(){
var clutter = "";
products.forEach((product, index)=>{
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden ">
        <img class=" h-full w-full object-cover" src="${product.img} alt="${product.headline}"/>
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2"> &#x20b9 ${product.price}</h4>
            </div>
            <button data-index="${index}" class= "add w-10 h-10 rounded-full shader text-yellow-400">
            <i data-index="${index}"  class="add ri-add-line">
                </i>
            </button>
        </div>
    </div>
</div>`   

})
document.querySelector(".products").innerHTML = clutter;
}


function addPopularProducts(){
    var clutter = ""
popularProducts.forEach((popularProduct)=>{
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
            src="${popularProduct.img}"
            alt="">
    </div>
    <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${popularProduct.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popularProduct.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">&#x20b9${popularProduct.price}</h4>
    </div>
</div>`
})

document.querySelector(".populars").innerHTML = clutter

}

function addToCart(){
    document.querySelector(".products")
    .addEventListener('click', (details)=>{
        
        if(details.target.classList.contains("add")){
            cart.push(products[details.target.dataset.index])
        }
    })
}


function showCart(){
    document.querySelector(".carticon")
    .addEventListener('click', function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = ""
        cart.forEach((item, index)=>{
            clutter +=  `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover " src="${item.img}"/>
            </div>
            <div>
                <h3 class="font-semibold ">${item.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${item.price}</h5>
            </div>
        </div>`;

        })

        document.querySelector(".cartexpnd").innerHTML= clutter;
    })
}






addProducts();
addPopularProducts();
addToCart();
showCart();