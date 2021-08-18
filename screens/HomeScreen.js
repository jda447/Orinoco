import data from '../camera'

const camera = {
    render: async () => {
    const response = await fetch('https://orinoco-op.herokuapp.com/api/cameras', {
        headers: {
            'Content-Type': 'application/json',
    },
});
if(!response || !response.ok) {
    return `<div>Error in getting data</div>`;
    }
    const products = await response.json();
        return `
        <ul class = "products">
        ${products.map( 
            ( product ) => `
        <li>
            <div class="product">
                <a href="/#/product/1${product._id}">
                    <img src="${product.image}" alt="${product.name}" />
                    <div class="product-name">
                    ${product.name}
                    </div>
                      <div class="price">
                        ${product.price}
                    </div>
                    <div class="description">
                      ${product.description}
                    </div>
                    </a>
            </div>
        </li>
        `
        )}
        `
    }
}

export default HomeScreen;