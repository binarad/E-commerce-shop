import { useState } from "react";
import "./create_product.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { Link } from "react-router"
import LaptopSpecsComp from "./LaptopSpecsComp";
import SmartphoneSpecsComp from "./SmartphoneSpecsComp";
import TabletSpecsComp from "./TabletSpecsComp";
import TVSpecsComp from "./TVSpecsComp";
import {
  LaptopSpecs,
  ProductSpecs,
  SmartphoneSpecs,
  TabletSpecs,
  TVSpecs,
} from "../../productData.type";
import { useNavigate } from "react-router";

export default function CreateProductPage() {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [warrantyMonths, setWarrantyMonths] = useState<string>("");
  const [specs, setSpecs] = useState<ProductSpecs | null>(null);
  const navigate = useNavigate();

  const ProductPOST = async () => {
    try {
      const req = await fetch("http://127.0.0.1:8000/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          manufacturer,
          price: parseFloat(price),
          quantity: parseInt(quantity),
          warranty_months: parseInt(warrantyMonths),
          type: category,
          specs,
        }),
      });

      if (req.ok) {
        const resp = await req.json();
        console.log(resp);
        navigate("/admin");
      }

      if (!name || !category || !manufacturer || !price || !specs) {
        alert("Please fill all required fields");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="create-product-main">
      <h1 id="title">Create Product</h1>
      <div id="create-product-container" className="gap-2.5">
        <TextField
          required
          label="Enter the product name"
          variant="standard"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <FormControl>
          <InputLabel id="category-select">Category</InputLabel>
          <Select
            required
            id="category-select"
            label="Category"
            variant="standard"
            value={category}
            defaultValue=""
            onChange={(event: SelectChangeEvent) => {
              event.preventDefault();
              setCategory(event.target.value);
            }}
          >
            <MenuItem value="smartphone">Smartphone</MenuItem>
            <MenuItem value="laptop">Laptop</MenuItem>
            <MenuItem value="tablet">Tablet</MenuItem>
            <MenuItem value="tv">TV</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="standard"
          type="text"
          required
          label="Manufacturer"
          onChange={(e) => {
            setManufacturer(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="number"
          required
          label="Price $"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="number"
          label="Quantity"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="number"
          label="Warranty months"
          onChange={(e) => {
            setWarrantyMonths(e.target.value);
          }}
        />
        <p>Technical specifications</p>
        <hr />
        {category == "smartphone" ? (
          <SmartphoneSpecsComp
            specs={specs as SmartphoneSpecs}
            setSpecs={setSpecs}
          />
        ) : category == "laptop" ? (
          <LaptopSpecsComp specs={specs as LaptopSpecs} setSpecs={setSpecs} />
        ) : category == "tablet" ? (
          <TabletSpecsComp specs={specs as TabletSpecs} setSpecs={setSpecs} />
        ) : category == "tv" ? (
          <TVSpecsComp specs={specs as TVSpecs} setSpecs={setSpecs} />
        ) : (
          ""
        )}
        <div className="flex gap-4">
          <Button
            variant="contained"
            className="w-[250px]"
            onClick={() => {
              ProductPOST();
            }}
          >
            Create Product
          </Button>
          <Link to="/admin">
            <Button variant="text" className="w-[150px]" color="secondary">
              Go back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
