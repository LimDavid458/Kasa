import accommodations from '../api/apartmentList.json';

export function loader() {
    return accommodations;
}
  
export function getAccommodationById(id) {
    const accommodation = accommodations.find(accommodation => accommodation.id === id);
    return accommodation;
}

