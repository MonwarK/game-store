import React from 'react'
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"

function Directory() {

    const data = [
        {
            title: "XBOX",
            imageUrl: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/09/XboxSeriesXPreOrder_HERO.jpg?resize=1200%2C675",
            id: 1,
            linkUrl: "xbox"
        },
        {
            title: "PC",
            imageUrl: "https://i.pcmag.com/imagery/roundups/00DuEK0BDIXkfrudGxcIKo6-17..1569492613.jpg",
            id: 2,
            linkUrl: "pc"
        },
        {
            title: "PLAYSTATION",
            imageUrl: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-11-05-12-00/sony-wont-sell-ps5-in-shops-in-japan-due-to-coronavirus-1604577658764.jpg/EG11/thumbnail/750x422/format/jpg/quality/60",
            id: 3,
            linkUrl: "playstation"
        },
        {
            title: "NINTENDO",
            imageUrl: "https://www.nintendo.com/content/dam/noa/en_US/images/switch/system/system-hero-01.jpg",
            id: 4,
            linkUrl: "nintendo"
        },
        {
            title: "IPHONE",
            imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg",
            id: 5,
            linkUrl: "iphone"
        }
    ]

    return (
        <div className="directory-menu">
            {data.map(({id, ...otherSectionProps}) => {
                return <MenuItem key={id} {...otherSectionProps} />
            })}
        </div>
    )
}

export default Directory
