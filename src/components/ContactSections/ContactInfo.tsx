import { ContactValues } from "@/src/data/data";
import { Grid } from "@mui/joy";
import React from "react";
import HorizontalIconCard from "../horizontal-icon-card/HorizontalIconCard";

function ContactInfo() {
  return (
    <Grid container spacing={3}>
      {ContactValues.map((item) => (
        <Grid sm={6} xs={12} key={item.name}>
          <HorizontalIconCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ContactInfo;
