import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../utils/helpers";
import { Navigate, Outlet, useLocation  } from "react-router-dom";

// Lazy load tournament components
const WahooOpen = lazy(() =>
  import("../../pages").then(module => ({ default: module.WahooOpen }))
);
const WahooOpenGallery = lazy(() =>
  import("../../pages").then(module => ({ default: module.WahooOpenGallery }))
);
const WahooOpenRules = lazy(() =>
  import("../../pages").then(module => ({ default: module.WahooOpenRules }))
);

const ChampionShip = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChampionShip }))
);
const ChampionShipGallery = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChampionShipGallery }))
);
const ChampionShipRules = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChampionShipRules }))
);

const ChubClayClassicInformation = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayClassicInformation }))
);
const ChubClayClassicRules = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayClassicRules }))
);
const ChubClayClassicGallery = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayClassicGallery }))
);

const ChubClayOpenInformation = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayOpenInformation }))
);
const ChubClayOpenRules = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayOpenRules }))
);
const ChubClayOpenGallery = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayOpenGallery }))
);

const ChubClayInvitationalInformation = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayInvitationalInformation }))
);
const ChubClayInvitationalRules = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayInvitationalRules }))
);
const ChubClayInvitationalGallery = lazy(() =>
  import("../../pages").then(module => ({ default: module.ChubClayInvitationalGallery }))
);

const WestEndMeatFishManiaInformation = lazy(() =>
  import("../../pages").then(module => ({ default: module.WestEndMeatFishManiaInformation }))
)
const WestEndMeatFishManiaRules = lazy(() =>
  import("../../pages").then(module => ({ default: module.WestEndMeatFishManiaRules }))
);
const WestEndMeatFishManiaGallery = lazy(() =>
  import("../../pages").then(module => ({ default: module.WestEndMeatFishManiaGallery }))
);
const WestEndMeatFishManiaOptional = lazy(() =>
  import("../../pages").then(module => ({ default: module.WestEndMeatFishManiaOptional }))
);
const BurunuBomaInformation = lazy(() =>
  import("../../pages").then(module => ({ default: module.BurunuBomaInformation }))
);
const BurunuBomaRules = lazy(() =>
  import("../../pages").then(module => ({ default: module.BurunuBomaRules }))
);
const BurunuRegistration = lazy(() =>
  import("../../pages").then((module) => ({
    default: module.BurunuRegistration,
  }))
);
const PrivateRoute = () => {

  const token = getTokenFromLocalStorage()?.token;
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;

};

const TournamentRoutes = () => (
  <>
    {/* Wahoo */}
    <Route path="/tournaments/wahoo-open" element={<WahooOpen />} />
    <Route path="/tournaments/wahoo-open/gallery" element={<WahooOpenGallery />} />
    <Route path="/tournaments/wahoo-open/rules" element={<WahooOpenRules />} />

    {/* Championship */}
    <Route path="/tournaments/championship" element={<ChampionShip />} />
    <Route path="/tournaments/championship/gallery" element={<ChampionShipGallery />} />
    <Route path="/tournaments/championship/rules" element={<ChampionShipRules />} />

    {/* Chub Cay Classic */}
    <Route path="/tournaments/chub-cay-classic" element={<ChubClayClassicInformation />} />
    <Route path="/tournaments/chub-cay-classic/rules" element={<ChubClayClassicRules />} />
    <Route path="/tournaments/chub-cay-classic/gallery" element={<ChubClayClassicGallery />} />

    <Route path="/tournaments/chub-cay-open" element={<ChubClayOpenInformation />} />
    <Route path="/tournaments/chub-cay-open/rules" element={<ChubClayOpenRules />} />
    <Route path="/tournaments/chub-cay-open/gallery" element={<ChubClayOpenGallery />} />

    
    <Route path="/tournaments/chub-cay-invitational" element={<ChubClayInvitationalInformation />} />
    <Route path="/tournaments/chub-cay-invitational/rules" element={<ChubClayInvitationalRules />} />
    <Route path="/tournaments/chub-cay-invitational/gallery" element={<ChubClayInvitationalGallery />} />

    {/* West End Madness */}
    <Route path="/tournaments/west-end-meatfish-mania" element={<WestEndMeatFishManiaInformation/>} />
    <Route path="/tournaments/west-end-meatfish-mania/rules" element={<WestEndMeatFishManiaRules />} />
    <Route path="/tournaments/west-end-meatfish-mania/gallery" element={<WestEndMeatFishManiaGallery />} />
    <Route path="/tournaments/west-end-meatfish-mania/optional" element={<WestEndMeatFishManiaOptional />} />

    <Route path="/tournaments/burunu-Boma" element={<BurunuBomaInformation/>} />
    
    <Route path="/tournaments/burunu-Boma/rules" element={<BurunuBomaRules />} />

    <Route element={<PrivateRoute />}>
    <Route path="/tournaments/burunu-Boma/register" element={<BurunuRegistration/>} />
    </Route>

  </>
);

export default TournamentRoutes;
