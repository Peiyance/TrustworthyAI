import { Route, Routes } from "react-router-dom";
import { withLayout } from '../components/Layout';
import Dashboard from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { ErrorPage } from "../pages/Error";
import { pageUrlRoot, pageUrlDashboard, pageUrlMonitor, pageUrlHome, pageUrlModels, pageUrlAbout, pageUrlDemoHarmfulPrompt, pageUrlDemoPrivacy, pageUrlDemoBias, pageUrlDemoCompliance, pageUrlOldAttack } from "./pages"
import LandingPage from "../pages/Landing";
import { withDemoLayout } from "../components/DemoLayout";
import DemoIO, { DemoIOMode } from "../pages/DemoGuards/DemoIO";
import DemoCompliance from "../pages/DemoGuards/DemoCompliance";
import Monitor from "../pages/Monitor";
import { ModelPage } from "../pages/ModelPage";

export default function RouterSwitch() {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path={pageUrlRoot} element={<LandingPage />} />

            {/* Main Pages */}
            <Route path={pageUrlDashboard} element={withLayout(<Dashboard />)} />
            <Route path={pageUrlMonitor} element={withLayout(<Monitor />)} />
            <Route path={pageUrlHome} element={withLayout(<Home />)} />
            <Route path={pageUrlModels} element={withLayout(<ModelPage />)} />
            <Route path={pageUrlAbout} element={withLayout(<ErrorPage />)} />

            {/* Demo Pages */}
            <Route path={pageUrlDemoHarmfulPrompt} element={withDemoLayout(<DemoIO mode={DemoIOMode.HarmfulOutput} />)} />
            <Route path={pageUrlDemoPrivacy} element={withDemoLayout(<DemoIO mode={DemoIOMode.Privacy} />)} />
            <Route path={pageUrlDemoBias} element={withDemoLayout(<DemoIO mode={DemoIOMode.Bias} />)} />
            <Route path={pageUrlDemoCompliance} element={withDemoLayout(<DemoCompliance />)} />

            {/* Old Pages */}
            <Route path={pageUrlOldAttack} element={<Home />} />

        </Routes>
    )
}