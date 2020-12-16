import * as React from "react";

export const Video = ({ src }: { src: string }) => (
  <video controls style={{ width: "100%", height: "auto" }} src={src} />
);
