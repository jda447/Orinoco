import data from '../controllers/camera'

const camera = {
    render: () => {
    const { products } = data;
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