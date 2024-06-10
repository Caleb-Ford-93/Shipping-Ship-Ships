import { getHaulers,getShippingShips } from "./database.js"
import { alphabeticalByName } from "./listSorter.js"

export const HaulerList = () => {
    const haulers = getHaulers()
    const sortedHaulers = alphabeticalByName(haulers)
    let haulerHTML = "<ul>"

    for (const hauler of sortedHaulers) {
        haulerHTML += `<li data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if(itemClicked.dataset.type === "hauler"){
            const haulerId = parseInt(itemClicked.dataset.id)
            const shippingShips = getShippingShips()
            let shipCounter = 0
            for (const ship of shippingShips) {
                if(haulerId === ship.haulerId) {
                    shipCounter++
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} ships.`)
        }     
    }
)