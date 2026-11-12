import Landing from "./landing/Landing";
import VideoRecreation from "./VideoRecreation";

export default function App() {
  return new URLSearchParams(window.location.search).has("recreation") ? (
    <VideoRecreation />
  ) : (
    <Landing />
  );
}
