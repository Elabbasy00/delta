"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Sheet,
  Textarea,
} from "@mui/joy";
import React, { useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(info),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success("We Recived Your Message!");
      setInfo({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } else {
      console.log(data);
      toast.error("Please Fill All fields..");
    }
  };

  return (
    <Sheet
      sx={{
        mt: 7,
        borderRadius: "20px",
        px: 3,
        py: 5,
        boxShadow: "xl",
      }}
      component="form"
      onSubmit={onSubmit}
    >
      <Grid container spacing={2}>
        <Grid md={6} xs={12}>
          <FormControl required>
            <FormLabel>الاسم الاول</FormLabel>
            <Input
              onChange={onChange}
              value={info.first_name}
              name="first_name"
              placeholder="الاسم الاول"
              size="lg"
            />
          </FormControl>
        </Grid>
        <Grid md={6} xs={12}>
          <FormControl required>
            <FormLabel>الاسم الاخير</FormLabel>
            <Input
              onChange={onChange}
              value={info.last_name}
              name="last_name"
              placeholder="الاسم الاخير"
              size="lg"
            />
          </FormControl>
        </Grid>
        <Grid md={6} xs={12}>
          <FormControl required>
            <FormLabel>رقم الموبيل</FormLabel>
            <Input
              onChange={onChange}
              value={info.phone_number}
              name="phone_number"
              placeholder="رقم الموبيل"
              size="lg"
            />
          </FormControl>
        </Grid>
        <Grid md={6} xs={12}>
          <FormControl required>
            <FormLabel>البريد الالكتروني</FormLabel>
            <Input
              onChange={onChange}
              value={info.email}
              name="email"
              placeholder="بريدك الاكتروني"
              size="lg"
              type="email"
            />
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <FormControl required>
            <FormLabel>رسالتك</FormLabel>
            <Textarea
              onChange={onChange}
              value={info.message}
              name="message"
              sx={{ mb: 2 }}
              minRows={4}
              placeholder="اهلا.. اريد عرض اسعار بخصوص..."
              size="lg"
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sx={{ alignContent: "center" }}>
          <Button
            type="submit"
            color="primary"
            variant="solid"
            sx={{ m: "auto", display: "block" }}
          >
            ارسل رسالتك
          </Button>
        </Grid>
      </Grid>
    </Sheet>
  );
}

export default ContactForm;
