"use client";

import { useState } from "react";

export function DiscordHandle({ handle }) {
  const [status, setStatus] = useState("");

  async function copyHandle() {
    try {
      await navigator.clipboard.writeText(handle);
      setStatus("Copied to clipboard.");
    } catch {
      setStatus("Select the handle to copy it manually.");
    }
  }

  return (
    <div className="discord-handle">
      <span>{handle}</span>
      <button type="button" onClick={copyHandle}>Copy</button>
      <span className="copy-status" role="status">{status}</span>
    </div>
  );
}
