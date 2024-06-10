import { HaulerList } from "./HaulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"
import { DockList } from "./DockList.js"

const haulingShipHTML = HaulerList()
const shippingShipHTML = ShippingShipList()
const dockListHTML = DockList()

const haulerContainer = document.querySelector(".details-haulers")
const shippingShipContainer = document.querySelector(".details-shippingShips")
const dockContainer = document.querySelector(".details-docks")

haulerContainer.innerHTML += haulingShipHTML
shippingShipContainer.innerHTML += shippingShipHTML
dockContainer.innerHTML += dockListHTML