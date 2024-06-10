import { getHaulers, getShippingShips } from "./database.js"
import { alphabeticalByName } from "./listSorter.js"

export const ShippingShipList = () => {
    const shippingShips = getShippingShips()
    const sortedShippingShips = alphabeticalByName(shippingShips)
    let shippingShipHTML = "<ul>"

    for (const shippingShip of sortedShippingShips) {
        shippingShipHTML += `<li data-type="ship" 
                                 data-name="${shippingShip.name}"
                                 data-id="${shippingShip.id}" 
                                 data-haulerId="${shippingShip.haulerId}">
                              ${shippingShip.name}</li>`
    }

    shippingShipHTML += "</ul>"

    return shippingShipHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if(itemClicked.dataset.type === "ship"){
            const haulers = getHaulers()
            const shipHaulerId = parseInt(itemClicked.dataset.haulerid)
            let haulingShip = {}
            for (const hauler of haulers) {
                if(hauler.id === shipHaulerId){
                    haulingShip = hauler
                }
                
            }
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)