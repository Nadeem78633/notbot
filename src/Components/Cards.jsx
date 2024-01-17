import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
import DataComponent from "../DataComponent";

import "../assets/Css/cards.css";

const Cards = () => {
  const data = DataComponent();
  return (
    <>
      <Grid container spacing={3} style={{ marginTop: "40px" }}>
        {data.map((data) => (
          <Grid item xs={12} sm={12} md={4} key={data.id}>
            <Card>
              <CardContent>
                <Typography className="h6" variant="h6">
                  {data.time}
                </Typography>
                <div className="div-link">
                  <Typography className="subtitle1" variant="subtitle1">
                    {data.otherTime}
                  </Typography>
                  <Typography className="subtitle2" variant="subtitle1">
                    Copy link
                  </Typography>
                </div>
                <Divider />
                <div className="switch">
                  {data.switch}
                  <Typography
                    variant="subtitle1"
                    style={{ marginTop: "30px", color: "black" }}
                  >
                    {data.booking}
                  </Typography>
                </div>
                <div className="switch">
                  <img
                    src={data.clockIcon}
                    alt="clock"
                    style={{
                      width: "14px",
                      marginRight: "5px",
                      marginLeft: "12px",
                      marginTop: "15px",
                    }}
                  />
                  <Typography style={{ fontSize: "14px", marginTop: "15px" }}>
                    {data.minute}
                  </Typography>
                </div>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography>{data.meeting}</Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography style={{ color: "gray" }}>Share:</Typography>
                  <img
                    src={data.share[0]}
                    alt="message"
                    style={{ height: "21px" }}
                  />
                  <img
                    src={data.share[1]}
                    alt="email"
                    style={{ height: "21px" }}
                  />
                  <img
                    src={data.share[2]}
                    alt="twitter"
                    style={{ height: "21px" }}
                  />
                  <img
                    src={data.share[3]}
                    alt="facebook"
                    style={{ height: "21px" }}
                  />
                </div>
              </CardContent>
              <Divider />
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "gray",
                  }}
                >
                  <Typography>Embed on website </Typography>
                  <Typography>Embed in Email </Typography>
                </div>
              </CardContent>

              <Divider />
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography style={{ color: "red" }}>Delete</Typography>
                  <Typography style={{ color: "#1569ef" }}>Clone</Typography>
                  <Typography style={{ color: "#1569ef" }}>Edit</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Cards;
