import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 10.367,  
    lng: 124.9553 
};

const GoogleMapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
