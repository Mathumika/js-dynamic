let http = new XMLHttpRequest();
http.open('GET', 'products.json', true);
http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = "";
        for (let item of products) {
            output += `<div class="flex flex-col lg:flex-row items-center justify-evenly">
                          <div class="flex flex-col items-center justify-center">
                            <img class="h-72 w-72" src="${item.image}" alt="${item.title}" />
                            <div class="">${item.title}</div>
                            <div class="">${item.price}</div>
                            <a href="${item.addToCartLink}" class="cursor-pointer custom-bg h-6 w-40 text-center text-white text-sm font-semibold items-center justify-center rounded-2xl mx-auto my-2">
                              Add To Cart
                            </a>
                          </div>
                        </div>`;
        }
        document.querySelector(".products").innerHTML = output;
    }
}

