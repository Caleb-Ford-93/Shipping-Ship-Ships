import { getDocks, getHaulers } from "./database.js"
import { alphabeticalByLocation } from "./listSorter.js"


export const DockList = () => {
    const docks = getDocks()
    const sortedDocks = alphabeticalByLocation(docks)
    let docksHTML = "<ul>"

    for (const dock of sortedDocks) {
        docksHTML += `<li data-type="dock"
                          data-location="${dock.location}"
                          data-id="${dock.id}"
                          data-volume="${dock.volume}">${dock.location}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "dock") {
            const allHaulers = getHaulers()
            let dockedHaulers= ``
            for (const hauler of allHaulers) {
                if(hauler.dockId === parseInt(itemClicked.dataset.id)){
                    dockedHaulers += `${hauler.name}\n`
                }
            }
            if(dockedHaulers === ``) {
                dockedHaulers = `Somebody stole all the boats here`
            }
            window.alert(`The ${itemClicked.dataset.location} dock is currently unloading:\n${dockedHaulers}`)
        }
    }
)