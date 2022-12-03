import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { CartControl } from '../../components/cart';
import ContinueShopping from '../../components/cart/ContinueShopping';
import { useCart } from '../../hooks';

export default function Map() {
  const Map = {
    width: '100%',
    height: '500px',
  };

  const defaultProps = {
    lat: 44.439663,
    lng: 26.096306,
  };

  const cart = useCart();

  return (
    <>
      <main className="lg:px-0 mx-auto mb-4">
        <header className="flex justify-between text-zinc-400">
          <ContinueShopping></ContinueShopping>
          <CartControl cart={cart}></CartControl>
        </header>
      </main>

      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={Map}
          center={defaultProps}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </>
  );
}
