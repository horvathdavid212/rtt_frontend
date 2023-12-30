import { Container, Typography, Paper, CardMedia } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Üdv az oldalon!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
          scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum
          augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales.
        </Typography>
      </Paper>
      <CardMedia
        component="img"
        image={"https://picsum.photos/800/400"}
        alt="Random Scenic"
        style={{ marginTop: "20px", borderRadius: "4px" }}
      />
    </Container>
  );
};

export default Home;
