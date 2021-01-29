import React, {useState, useEffect} from 'react'
import CollectionPreview from "../../components/collection-preview/collection-preview"
import SHOP_DATA from "./shop.data";

function Shop() {
    return (
        <div>
            {
                SHOP_DATA.map(({id, ...otherCollectionProps}) => 
                    <CollectionPreview key={id} {...otherCollectionProps} />
                )
            }
        </div>
    )
}

export default Shop;
