import { ShopItem } from "./ShopItem";
import data from "./Products.json"
export function ShopContainer() {
    //console.log(data.products)
    return (
        
            <section className="shop-container ">
                {
                    data.products.map((item) => {
                        return(
                            <ShopItem {...item} key={item.name}/>
                        )
                    })
                }

            </section>
        

    )
}