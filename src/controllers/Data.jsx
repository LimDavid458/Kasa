import accommodations from '../api/apartmentList.json';

export function loader() {
    return accommodations;
}
  
export function getAccommodationById(id) {
    const accommodation = accommodations.find(x => x.id === id);
    return accommodation;
}