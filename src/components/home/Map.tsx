import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { useCallback, useEffect, useMemo, useRef } from "react";

type Props = {
  lat: number;
  lng: number;
  markerTitle: string;
  markerIcon?: string;
};

function MapElement({
  center,
  zoom,
  markerIconUrl,
  markerTitle,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  markerIconUrl?: string;
  markerTitle?: string;
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const map = new google.maps.Map(ref.current, {
        center,
        zoom,
        fullscreenControl: false,
        keyboardShortcuts: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapId: "63f164f6af1535ee",
      });

      const marker = new google.maps.Marker({
        position: center,
        map,
        title: markerTitle,
        icon: markerIconUrl,
      });

      const infoWindow = new google.maps.InfoWindow();

      const fn = () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      };

      marker.addListener("click", fn);
    }
  }, [center, markerIconUrl, markerTitle, zoom]);

  return (
    <div
      className="h-full min-h-[30rem] overflow-hidden order-2 md:order-1"
      ref={ref}
      id="map"
    />
  );
}

export const Map = (props: Props) => {
  const { lat, lng, markerTitle, markerIcon } = props;

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  const render = useCallback(
    (status: Status) => {
      switch (status) {
        case Status.LOADING:
          return <div className="h-full min-h-[30rem] overflow-hidden" />;
        case Status.FAILURE:
          return <div>Error</div>;
        case Status.SUCCESS:
          return (
            <MapElement
              markerTitle={markerTitle}
              markerIconUrl={markerIcon}
              center={center}
              zoom={15}
            />
          );
      }
    },
    [markerTitle, markerIcon, center],
  );

  return (
    <div className="min-h-[30rem]">
      <Wrapper
        version="weekly"
        apiKey="AIzaSyACS8IGSJ394ipNcrl_Y-6T_q-1DpfhN88"
        render={render}
      />
    </div>
  );
};

/* <script>
  import { Loader } from "@googlemaps/js-api-loader";

  async function initMap() {
    const mapElement = document.getElementById("map");

    if (!mapElement) {
      return;
    }

    const location = {
      lat: Number(mapElement.dataset.lat),
      lng: Number(mapElement.dataset.lng),
    };
    const markerTitle = mapElement.dataset.markerTitle;
    const markerIcon = mapElement.dataset.markerIcon;

    const loader = new Loader({
      apiKey: "AIzaSyACS8IGSJ394ipNcrl_Y-6T_q-1DpfhN88",
      version: "weekly",
    });

    loader.importLibrary("maps").then(async ({ Map, InfoWindow }) => {
      const map = new Map(mapElement, {
        center: location,
        zoom: 15,
        fullscreenControl: false,
        keyboardShortcuts: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapId: "63f164f6af1535ee",
      });

      const marker = new google.maps.Marker({
        position: location,
        map,
        title: markerTitle,
        icon: markerIcon,
      });

      const infoWindow = new InfoWindow();

      const fn = () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      };

      marker.addListener("click", fn);
    });
  }

  initMap();
</script>

<div
  id="map"
  data-lng={lng}
  data-lat={lat}
  data-marker-title={markerTitle}
  data-marker-icon={markerIcon}
  class="h-full min-h-[30rem] overflow-hidden order-2 md:order-1"
>
</div>

<script></script> */
