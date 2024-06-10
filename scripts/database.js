const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Haulistic Solutions", dockId: 1},
        { id: 2, name: "Haul Me To The Moon", dockId: 2},
        { id: 3, name: "Haul-o", dockId: 3},
        { id: 4, name: "It's Haul Over", dockId: 1},
        { id: 5, name: "I'm Haul Over It", dockId: 4},
    ],
    shippingShips: [
        { id: 1, name: "I Ship That", haulerId: 1},
        { id: 2, name: "Oh Ship", haulerId: 1},
        { id: 3, name: "Just A Ship", haulerId: 1},
        { id: 4, name: "Joined At The Ship", haulerId: 1},
        { id: 5, name: "Stiff Upper Ship", haulerId: 1},
        { id: 6, name: "This Ship Has Sailed", haulerId: 1},
        { id: 7, name: "I Ship You Not", haulerId: 1},
        { id: 8, name: "Water-Ship Down", haulerId: 1},
        { id: 9, name: "Sea-Ship Enterprise", haulerId: 1},
        { id: 10, name: "If It Fits It Ships", haulerId: 1},
        { id: 11, name: "Jump Hop And a Ship", haulerId: 1},
    ]
}

export const getDocks = () => 
    database.docks.map((dock) => ({ ...dock }))


export const getHaulers = () => 
    database.haulers.map((hauler) => ({ ...hauler }))


export const getShippingShips = () => 
    database.shippingShips.map((ship) => ({ ...ship }))
