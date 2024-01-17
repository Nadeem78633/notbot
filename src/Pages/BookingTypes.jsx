import { Grid, Typography, Button } from "@mui/material";
import "../assets/Css/bookingTypes.css";
import { Cards } from "../Components";
const BookingTypes = () => {
  return (
    <>
      <Grid container className="grid-container">
        <Grid item xs={12} sm={12} md={2.5}>
          <Typography variant="h5" style={{ fontWeight: "700",marginTop:'10px' }}>
            Booking Types
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2.5}>
          <Button className="button1" variant="contained">
            + Create new booking type
          </Button>
        </Grid>
        <Grid item xs={0} sm={0} md={2}>
        
        </Grid>
        <Grid item xs={12} sm={12} md={2.5}>
          <Button className="button2" variant="contained">
            Embed booking page
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={2.5}>
          <Button className="button3" variant="contained">
            View your bookings page
          </Button>
        </Grid>
        <Cards />
      </Grid>
    </>
  );
};
export default BookingTypes;
