export const alphabeticalByName = (array) => {
   return array.sort((a, b) => a.name.localeCompare(b.name))
}
export const alphabeticalByLocation = (array) => {
    return array.sort((a, b) => a.location.localeCompare(b.location))
 }