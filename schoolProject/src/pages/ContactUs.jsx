import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Divider,
  Grid,
  Paper,
  Card,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { submitContactForm } from "../utils/adminService";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send the data to Firestore
      await submitContactForm(formData);
      setSubmitStatus("Thank you for your message! We will get back to you soon.");

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" paragraph>
        Have questions about Joyland School? We'd love to hear from you!
      </Typography>

      {submitStatus && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {submitStatus}
        </Alert>
      )}

      <Paper elevation={3} sx={{ p: 3, mb: 4, boxShadow: "15px 21px 3px -2px rgba(0, 0, 0, 0.2)" }}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone (optional)"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="subject"
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="message"
                name="message"
                label="Message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                sx={{ mt: 2 }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mt: 3 }}>
        <Card sx={{ boxShadow: "15px 21px 3px -2px rgba(0, 0, 0, 0.2)" }}>
          <Box sx={{ display: " flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ textDecoration: "underline" }}
            >
              Other Ways to Contact Us
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginRight: "120" }}>
              <strong>POSTAL ADDRESS:</strong> P.O BOX 86713-80100 MOMBASA, KENYA
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Call/WhatsApp:</strong> +25-472-302-4301
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@joylandschools.com" target="_blank">
                info@joylandschools.com
              </a>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};
export default ContactUs;
