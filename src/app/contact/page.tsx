import ContactInfo from "@/src/components/ContactSections/ContactInfo";
import ContactForm from "@/src/components/contact-form/ContactForm";
import PageHeader from "@/src/components/page-header/PageHeader";
import React from "react";
import { Container } from "@mui/joy";

function page() {
  return (
    <div>
      <PageHeader title="برد خلال فترة قصيرة" highlight="سنقوم " />
      <Container>
        <ContactInfo />
        <ContactForm />
      </Container>
    </div>
  );
}

export default page;
