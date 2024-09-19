import { DialogButton, type ServerAPI } from "decky-frontend-lib";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { useDeckcordState } from "../../hooks/useDeckcordState";

export function MuteButton(props: { serverAPI: ServerAPI }) {
  const state = useDeckcordState(props.serverAPI);
  if (state?.me?.is_muted) {
    return (
      <DialogButton
        onClick={() => {
          props.serverAPI.callPluginMethod("toggle_mute", {});
        }}
        style={{
          height: "40px",
          width: "40px",
          minWidth: 0,
          padding: "10px 12px",
          marginRight: "10px",
        }}
      >
        <FaMicrophoneAltSlash />
      </DialogButton>
    );
  }
  return (
    <DialogButton
      onClick={() => {
        props.serverAPI.callPluginMethod("toggle_mute", {});
      }}
      style={{
        height: "40px",
        width: "40px",
        minWidth: 0,
        padding: "10px 12px",
        marginRight: "10px",
      }}
    >
      <FaMicrophoneAlt />
    </DialogButton>
  );
}
