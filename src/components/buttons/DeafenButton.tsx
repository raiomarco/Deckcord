import { DialogButton, type ServerAPI } from "decky-frontend-lib";
import { FaHeadphonesAlt, FaSlash } from "react-icons/fa";
import { useDeckcordState } from "../../hooks/useDeckcordState";

export function DeafenButton(props: { serverAPI: ServerAPI }) {
  const state = useDeckcordState(props.serverAPI);
  if (!state?.me?.is_deafened) {
    return (
      <DialogButton
        onClick={() => {
          props.serverAPI.callPluginMethod("toggle_deafen", {});
        }}
        style={{
          height: "40px",
          width: "40px",
          minWidth: 0,
          padding: "10px 12px",
          marginRight: "10px",
        }}
      >
        <FaHeadphonesAlt />
      </DialogButton>
    );
  }
  return (
    <DialogButton
      onClick={() => {
        props.serverAPI.callPluginMethod("toggle_deafen", {});
      }}
      style={{
        height: "40px",
        width: "40px",
        minWidth: 0,
        padding: "10px 12px",
        marginRight: "10px",
      }}
    >
      <FaHeadphonesAlt />
      <FaSlash style={{ position: "absolute", left: "13px" }} />
    </DialogButton>
  );
}
