import { Container } from "@mui/joy";
import React from "react";

function Map() {
  return (
    <Container sx={{ mt: 15 }}>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="600"
          frameBorder={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </Container>
  );
}

export default Map;
