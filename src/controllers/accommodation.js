import accommodations from '../api/accommodationList.json';

/* Return list of accommodations */
export async function getAccommodations() {
    await fakeNetwork();   
    return accommodations;
}
  
/**
 * Find Accommodation with id
 * @param {String} id - Id accommodation 
 * @returns - Return an accommodation
 */
export function getAccommodationById(id) {
    console.log(typeof id);
    return accommodations.find(accommodation => accommodation.id === id) ?? null;
}

/* Create latency*/
async function fakeNetwork() {
    return new Promise((res) => {
        setTimeout(res, Math.random() * 1000 * 5 );
    });
}
