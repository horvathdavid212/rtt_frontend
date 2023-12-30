export interface Car {
  id: number | null;
  number: string;
  type: string;
}

const BASE_URL = "http://localhost:8080";

export const getAllCars = async (): Promise<Car[]> => {
  const response = await fetch(`${BASE_URL}/data/all`);
  if (!response.ok) {
    throw new Error("Error fetching cars");
  }
  return response.json();
};

export const getCarById = async (id: number): Promise<Car> => {
  const response = await fetch(`${BASE_URL}/data/${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching car with ID ${id}`);
  }
  return response.json();
};

export const saveCar = async (car: Car): Promise<Car> => {
  const response = await fetch(`${BASE_URL}/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  if (!response.ok) {
    throw new Error("Error saving car");
  }
  return response.json();
};

export const deleteCarById = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/data/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Error deleting car with ID ${id}`);
  }
};

export const updateCar = async (car: Car): Promise<Car> => {
  const response = await fetch(`${BASE_URL}/data/${car.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  if (!response.ok) {
    throw new Error(`Error updating car with ID ${car.id}`);
  }
  return response.json();
};
