import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Car,
  deleteCarById,
  getAllCars,
  getCarById,
  saveCar,
  updateCar,
} from "../service/carService";

const CarCrud = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [newCar, setNewCar] = useState({ number: "", type: "" });
  const [searchId, setSearchId] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editCar, setEditCar] = useState<Car | null>(null);

  useEffect(() => {
    fetchAllCars();
  }, []);

  const fetchAllCars = async () => {
    try {
      const cars = await getAllCars();
      setCars(cars);
    } catch (error) {
      console.error("Failed to fetch cars:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const car = await getCarById(Number(searchId));
      setCars(car ? [car] : []);
    } catch (error) {
      console.error("Failed to fetch car:", error);
    }
  };

  const handleSaveCar = async () => {
    try {
      const savedCar = await saveCar({ ...newCar, id: null });
      setCars([...cars, savedCar]);
      setNewCar({ number: "", type: "" });
    } catch (error) {
      console.error("Failed to save car:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCarById(id);
      fetchAllCars();
    } catch (error) {
      console.error("Failed to delete car:", error);
    }
  };

  const handleOpenDialog = (car: Car) => {
    setEditCar(car);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditCar(null);
  };

  const handleUpdateCar = async () => {
    if (editCar) {
      try {
        const updatedCar = await updateCar(editCar);
        setCars(
          cars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
        );
        handleCloseDialog();
      } catch (error) {
        console.error("Failed to update car:", error);
      }
    }
  };

  return (
    <Box
      style={{
        padding: "20px",
        margin: "0 auto",
        width: "50%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5">Új autó felvitele</Typography>
          <Box style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <TextField
              label="Rendszám"
              variant="outlined"
              value={newCar.number}
              onChange={(e) => setNewCar({ ...newCar, number: e.target.value })}
            />
            <TextField
              label="Típus"
              variant="outlined"
              value={newCar.type}
              onChange={(e) => setNewCar({ ...newCar, type: e.target.value })}
            />
            <Button variant="contained" color="primary" onClick={handleSaveCar}>
              Mentés
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5">Keresés ID alapján</Typography>
          <Box style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <TextField
              label="Autó ID"
              variant="outlined"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Keresés
            </Button>
            <Button variant="contained" color="primary" onClick={fetchAllCars}>
              Összes autó
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5">Autók</Typography>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Rendszám</TableCell>
                  <TableCell>Típus</TableCell>
                  <TableCell>Szerkesztés</TableCell>
                  <TableCell>Törlés</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {cars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell>{car.id}</TableCell>
                    <TableCell>{car.number}</TableCell>
                    <TableCell>{car.type}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => car.id !== null && handleOpenDialog(car)}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => car.id !== null && handleDelete(car.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Autó módosítása</DialogTitle>
        <DialogContent>
          <TextField
            label="Rendszám"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editCar?.number || ""}
            onChange={(e) =>
              editCar && setEditCar({ ...editCar, number: e.target.value })
            }
          />
          <TextField
            label="Típus"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editCar?.type || ""}
            onChange={(e) =>
              editCar && setEditCar({ ...editCar, type: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Mégse
          </Button>
          <Button onClick={handleUpdateCar} color="primary">
            Módosítás
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CarCrud;
