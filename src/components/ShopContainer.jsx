import { ShopItem } from "./ShopItem";
import data from "./Products.json";
import Model from "./Model";
export function ShopContainer() {
    //console.log(data.products)
    return (
        
            <section className="shop-container ">
                <Model />
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