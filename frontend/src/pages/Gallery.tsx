import { Grid, Container, Card, CardMedia } from "@mui/material";

const Gallery = () => {
  const images = Array.from(
    { length: 9 },
    (_, index) => `https://picsum.photos/500/300?random=${index}`
  );

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={`Random Image ${index}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
