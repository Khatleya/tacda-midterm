import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function App() {
  const [model, setModel] = useState("");
  const [body, setBody] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [maker, setMaker] = useState("");
  const [role, setRole] = useState("");

  const [modelError, setModelError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [brandError, setBrandError] = useState("");
  const [stockError, setStockError] = useState("");
  const [makerError, setMakerError] = useState("");
  const [roleError, setRoleError] = useState("");

  function checkModel(value) {
    setModel(value);

    if (value.length < 3) {
      setModelError("Minimum of 3 characters");
    } else {
      setModelError("");
    }
  }

  function checkStock(value) {
    setStock(value);

    if (value < 1 || value > 100) {
      setStockError("Stock must be 1 to 100");
    } else {
      setStockError("");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    let noError = false;

    if (model === "" || model.length < 3) {
      setModelError("Minimum of 3 characters");
      noError = true;
    }

    if (body === "") {
      setBodyError("Please select a body type");
      noError = true;
    }

    if (brand === "") {
      setBrandError("Brand is required");
      noError = true;
    }

    if (stock === "" || stock < 1 || stock > 100) {
      setStockError("Stock must be 1 to 100");
      noError = true;
    }

    if (maker === "") {
      setMakerError("Manufacturer is required");
      noError = true;
    }

    if (role === "") {
      setRoleError("Please select a role");
      noError = true;
    }

    if (noError === false) {
      alert("Guitar added successfully!");
    }
  }

  return (
    <div className="page">
      <Box className="form-box">

        <Typography variant="h4" className="title">
          Guitar Store Inventory
        </Typography>

        <Typography className="add-title">
          Add Guitar
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            label="Guitar Model"
            fullWidth
            margin="normal"
            value={model}
            onChange={(e) => checkModel(e.target.value)}
            error={modelError !== ""}
            helperText={modelError}
          />

          <TextField
            select
            label="Body Type"
            fullWidth
            margin="normal"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setBodyError("");
            }}
            error={bodyError !== ""}
            helperText={bodyError}
          >
            <MenuItem value="Electric">
              Electric
            </MenuItem>

            <MenuItem value="Acoustic">
              Acoustic
            </MenuItem>

            <MenuItem value="Bass">
              Bass
            </MenuItem>

            <MenuItem value="Classical">
              Classical
            </MenuItem>
          </TextField>

          <TextField
            label="Brand Name"
            fullWidth
            margin="normal"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);

              if (e.target.value === "") {
                setBrandError("Brand is required");
              } else {
                setBrandError("");
              }
            }}
            error={brandError !== ""}
            helperText={brandError}
          />

          <TextField
            label="Stock Quantity"
            type="number"
            fullWidth
            margin="normal"
            value={stock}
            onChange={(e) => checkStock(e.target.value)}
            error={stockError !== ""}
            helperText={stockError}
          />

          <TextField
            label="Manufacturer Name"
            fullWidth
            margin="normal"
            value={maker}
            onChange={(e) => {
              setMaker(e.target.value);

              if (e.target.value === "") {
                setMakerError("Manufacturer is required");
              } else {
                setMakerError("");
              }
            }}
            error={makerError !== ""}
            helperText={makerError}
          />

          <Typography className="role-title">
            User Role
          </Typography>

          <RadioGroup
            row
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setRoleError("");
            }}
          >

            <FormControlLabel
              value="Merchant"
              control={<Radio />}
              label="Merchant"
            />

            <FormControlLabel
              value="Consumer"
              control={<Radio />}
              label="Consumer"
            />

          </RadioGroup>

          {roleError !== "" && (
            <Typography color="error">
              {roleError}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="add-button"
          >
            Add Guitar
          </Button>

        </form>

      </Box>
    </div>
  );
}

export default App;