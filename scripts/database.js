const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Haulistic Solution", dockId: 1},
        { id: 2, name: "Haul Me To The Moon", dockId: 2},
        { id: 3, name: "Haul-o", dockId: 3},
        { id: 4, name: "It's Haul Over", dockId: 1},
        { id: 5, name: "Big Hauler", dockId: 4},
    ],
}

export const getDocks = () => {
    database.docks.map((dock) => ({...dock}))
}

export const getHaulers = () => {
    database.haulers.map((hauler) => ({...hauler}))
}