import accommodations from '../api/accommodationList.json';

export function getAccommodations() {
    return accommodations;
}
  
export function getAccommodationById(id) {
    return accommodations.find(accommodation => accommodation.id === id) ?? null;
}