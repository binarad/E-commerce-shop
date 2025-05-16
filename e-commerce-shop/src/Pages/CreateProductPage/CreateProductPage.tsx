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
import LaptopSpecsComp from "./LaptopSpecsComp";
import SmartphoneSpecsComp from "./SmartphoneSpecsComp";
import TabletSpecsComp from "./TabletSpecsComp";
import TVSpecsComp from "./TVSpecsComp";

export default function CreateProductPage() {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [warrantyMonths, setWarrantyMonths] = useState<string>("");
  const [screenSize, setScreenSize] = useState<string>("");
  const [screenRefreshRate, setScreenRefreshRate] = useState<string>("");
  const [screenResolution, setScreenResolution] = useState<string>("");
  const [matrixType, setMatrixType] = useState<string>("");
  const [cpu, setCpu] = useState<string>("");
  const [cpuGen, setCpuGen] = useState<string>("");
  const [cpuFreq, setCpuFreq] = useState<string>("");
  const [gpu, setGpu] = useState<string>("");
  const [gpuRamSize, setGpuRamSize] = useState<string>("");
  const [gpuType, setGpuType] = useState<string>("");
  const [ramSize, setRamSize] = useState<string>("");
  const [ramType, setRamType] = useState<string>("");
  const [ramFreq, setRamFreq] = useState<string>("");
  const [storageSize, setStorageSize] = useState<string>("");
  const [storageType, setStorageType] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [networkAdapters, setNetworkAdapters] = useState<string[]>([]);
  const [usbPorts, setUsbPorts] = useState<string[]>([]);
  const [videoPorts, setVideoPorts] = useState<string[]>([]);
  const [audioPorts, setAudioPorts] = useState<string[]>([]);
  const [wirelessConnections, setWirelessConnections] = useState<string[]>([]);
  const [deliverySet, setDeliverySet] = useState<string[]>([]);
  const [operatingSystem, setOperatingSystem] = useState<string>("");

  const ProductPOST = async () => {
    try {
      const req = await fetch("http://127.0.0.1:8000/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          manufacturer: manufacturer,
          price: parseFloat(price),
          quantity: parseInt(quantity),
          warranty_months: parseInt(warrantyMonths),
          type: category,
          specs: {
            screen_size: parseFloat(screenSize),
            screen_refresh_rate_gz: parseFloat(screenRefreshRate),
            screen_resolution: screenResolution,
            matrix_type: matrixType,
            cpu: cpu,
            cpu_generation: cpuGen,
            cpu_frequency_ghz: parseFloat(cpuFreq),
            gpu: gpu,
            gpu_storage_size_gb: parseFloat(gpuRamSize),
            gpu_type: gpuType,
            ram_gb: parseInt(ramSize),
            ram_type: ramType,
            ram_frequency_ghz: ramFreq,
            storage: storageSize,
            storage_type: storageType,
            color: color,
            weight_kg: weight,
            size: size,
            network_adapters: networkAdapters,
            usb_ports: usbPorts,
            video_ports: videoPorts,
            audio_ports: audioPorts,
            wireless_connections: wirelessConnections,
            delivery_set: deliverySet,
            os: operatingSystem,
          },
        }),
      });

      const resp = await req.json();
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="create-product-main">
      <h1 id="title">Create Product</h1>
      {/* Do i need img? */}
      <div id="create-product-container" className="gap-2.5">
        <TextField
          label="Enter the product name"
          variant="standard"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <FormControl>
          <InputLabel id="category-select">Category</InputLabel>
          <Select
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
          label="Manufacturer"
          onChange={(e) => {
            e.preventDefault();
            setManufacturer(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="number"
          label="Price $"
          onChange={(e) => {
            e.preventDefault();
            setPrice(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="number"
          label="Quantity"
          onChange={(e) => {
            e.preventDefault();
            setQuantity(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="number"
          label="Warranty months"
          onChange={(e) => {
            e.preventDefault();
            setWarrantyMonths(e.target.value);
          }}
        />
        <p>Technical specifications</p>
        <hr />
        {category == "smartphone" ? (
          <div>Smartphone</div>
        ) : // <SmartphoneSpecsComp /> //Dont forget about this
        category == "laptop" ? (
          <LaptopSpecsComp
            setScreenSize={setScreenSize}
            setScreenRefreshRate={setScreenRefreshRate}
            setScreenResolution={setScreenResolution}
            setMatrixType={setMatrixType}
            setCpu={setCpu}
            setCpuGen={setCpuGen}
            setCpuFreq={setCpuFreq}
            setGpu={setGpu}
            setGpuRamSize={setGpuRamSize}
            setGpuType={setGpuType}
            setRamSize={setRamSize}
            setRamType={setRamType}
            setRamFreq={setRamFreq}
            setStorageSize={setStorageSize}
            setStorageType={setStorageType}
            setColor={setColor}
            setWeight={setWeight}
            setSize={setSize}
            setNetworkAdapters={setNetworkAdapters}
            setUsbPorts={setUsbPorts}
            setVideoPorts={setVideoPorts}
            setAudioPorts={setAudioPorts}
            setWirelessConnections={setWirelessConnections}
            setDeliverySet={setDeliverySet}
            setOperatingSystem={setOperatingSystem}
          />
        ) : category == "tablet" ? (
          <TabletSpecsComp />
        ) : category == "tv" ? (
          <TVSpecsComp />
        ) : (
          ""
        )}
        <Button variant="contained" className="w-[250px]" onClick={ProductPOST}>
          Create Product
        </Button>
      </div>
    </div>
  );
}
