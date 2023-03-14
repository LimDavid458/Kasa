import accommodations from '../api/accommodationList.json';

export async function getAccommodations() {
    await fakeNetwork();   

    return accommodations;
}
  
export function getAccommodationById(id) {
    return accommodations.find(accommodation => accommodation.id === id) ?? null;
}

async function fakeNetwork() {
    return new Promise((res) => {
        setTimeout(res, Math.random() * 1000 * 5);
    });
}
