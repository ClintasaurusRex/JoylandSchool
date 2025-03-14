import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, Button, Box, Link } from "@mui/material";
import "../styles/Academic.scss";

const Academic = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Academic Programs
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="academic-cards">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                <strong>Subjects for Pre-Primary (P.P) 1, 2</strong>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                National pre-primary curriculum includes the following:
              </Typography>
              <br />
              <ul>
                <li>Language Activities</li>
                <li>Mathematics Activities</li>
                <li>Creative Activities</li>
                <li>Environmental Activities</li>
                <li>Religious Activities</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="academic-cards">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                <strong>Subjects for Grades 1, 2, 3</strong>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                National lower primary curriculum includes the following:
              </Typography>
              <br />
              <ul>
                <li>English</li>
                <li>Kiswahili</li>
                <li>Mathematics</li>
                <li>Environmental Activities</li>
                <li>Creative Activities</li>
                <li>Religious Studies</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="academic-cards">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                <strong>Subjects for Grades 4, 5, 6</strong>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                National upper primary curriculum includes the following:
              </Typography>
              <br />
              <ul>
                <li>English</li>
                <li>Kiswahili</li>
                <li>Mathematics</li>
                <li>Science and Technology</li>
                <li>Agriculture and Nutrition</li>
                <li>Social Studies</li>
                <li>Creative Arts</li>
                <li>Religious Studies</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="academic-cards">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                <strong>Subjects for Grades 7, 8, 9</strong>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                National junior secondary curriculum includes the following:
              </Typography>
              <br />
              <ul>
                <li>English</li>
                <li>Kiswahili</li>
                <li>Mathematics</li>
                <li>Agriculture</li>
                <li>Social Studies</li>
                <li>Integrated Science</li>
                <li>Creative Arts and Sports</li>
                <li>Pre-Technical Studies</li>
                <li>Religious Studies</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "space-evenly" }}>
        <Link component={RouterLink} to="/admission">
          <Button color="primary" variant="contained">
            Admissions
          </Button>
        </Link>
        <Link component={RouterLink} to="/contact">
          <Button color="primary" variant="contained">
            Contact Us
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Academic;
