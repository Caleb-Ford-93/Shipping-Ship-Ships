import { getShippingShips } from "./database.js"

export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        shippingShipHTML += `<li>${shippingShip.name}</li>`
    }

    shippingShipHTML += "</ul>"

    return shippingShipHTML
}