import { TextField } from "@mui/material";

interface LaptopSpecsProps {
  setScreenSize: React.Dispatch<React.SetStateAction<string>>;
  setScreenRefreshRate: React.Dispatch<React.SetStateAction<string>>;
  setScreenResolution: React.Dispatch<React.SetStateAction<string>>;
  setMatrixType: React.Dispatch<React.SetStateAction<string>>;
  setCpu: React.Dispatch<React.SetStateAction<string>>;
  setCpuGen: React.Dispatch<React.SetStateAction<string>>;
  setCpuFreq: React.Dispatch<React.SetStateAction<string>>;
  setGpu: React.Dispatch<React.SetStateAction<string>>;
  setGpuRamSize: React.Dispatch<React.SetStateAction<string>>;
  setGpuType: React.Dispatch<React.SetStateAction<string>>;
  setRamSize: React.Dispatch<React.SetStateAction<string>>;
  setRamType: React.Dispatch<React.SetStateAction<string>>;
  setRamFreq: React.Dispatch<React.SetStateAction<string>>;
  setStorageSize: React.Dispatch<React.SetStateAction<string>>;
  setStorageType: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  setNetworkAdapters: React.Dispatch<React.SetStateAction<string[]>>;
  setUsbPorts: React.Dispatch<React.SetStateAction<string[]>>;
  setVideoPorts: React.Dispatch<React.SetStateAction<string[]>>;
  setAudioPorts: React.Dispatch<React.SetStateAction<string[]>>;
  setWirelessConnections: React.Dispatch<React.SetStateAction<string[]>>;
  setDeliverySet: React.Dispatch<React.SetStateAction<string[]>>;
  setOperatingSystem: React.Dispatch<React.SetStateAction<string>>;
}

export default function LaptopSpecsComp(props: LaptopSpecsProps) {
  return (
    <div className="box-border flex flex-col">
      <h1 className="text-2xl">Screen</h1>
      <TextField
        type="number"
        variant="standard"
        label="Screen size (inch)"
        onChange={(e) => {
          e.preventDefault();
          props.setScreenSize(e.target.value);
        }}
      />
      <TextField
        type="number"
        variant="standard"
        label="Screen refresh rate (ghz)"
        onChange={(e) => {
          e.preventDefault();
          props.setScreenRefreshRate(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Screen resolution"
        onChange={(e) => {
          e.preventDefault();
          props.setScreenResolution(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Matrix type"
        onChange={(e) => {
          e.preventDefault();
          props.setMatrixType(e.target.value);
        }}
      />
      <h1 className="text-2xl">CPU</h1>
      <TextField
        variant="standard"
        label="CPU"
        onChange={(e) => {
          e.preventDefault();
          props.setCpu(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="CPU generation"
        onChange={(e) => {
          e.preventDefault();
          props.setCpuGen(e.target.value);
        }}
      />
      <TextField
        type="number"
        variant="standard"
        label="CPU frequency (ghz)"
        onChange={(e) => {
          e.preventDefault();
          props.setCpuFreq(e.target.value);
        }}
      />
      <h1 className="text-2xl">GPU</h1>
      <TextField
        variant="standard"
        label="GPU"
        onChange={(e) => {
          e.preventDefault();
          props.setGpu(e.target.value);
        }}
      />
      <TextField
        type="number"
        variant="standard"
        label="GPU Ram size (gb)"
        onChange={(e) => {
          e.preventDefault();
          props.setGpuRamSize(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="GPU type"
        onChange={(e) => {
          e.preventDefault();
          props.setGpuType(e.target.value);
        }}
      />
      <h1 className="text-2xl">RAM</h1>
      <TextField
        type="number"
        variant="standard"
        label="RAM size (gb)"
        onChange={(e) => {
          e.preventDefault();
          props.setRamSize(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="RAM type"
        onChange={(e) => {
          e.preventDefault();
          props.setRamType(e.target.value);
        }}
      />
      <TextField
        type="number"
        variant="standard"
        label="RAM frequency (ghz)"
        onChange={(e) => {
          e.preventDefault();
          props.setRamFreq(e.target.value);
        }}
      />
      <h1 className="text-2xl">Storage</h1>
      <TextField
        type="number"
        variant="standard"
        label="Storage size (gb)"
        onChange={(e) => {
          e.preventDefault();
          props.setStorageSize(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Storage type"
        onChange={(e) => {
          e.preventDefault();
          props.setStorageType(e.target.value);
        }}
      />
      <br />
      <hr />
      <TextField
        variant="standard"
        label="Color"
        onChange={(e) => {
          e.preventDefault();
          props.setColor(e.target.value);
        }}
      />
      <TextField
        type="number"
        variant="standard"
        label="Weight (kg)"
        onChange={(e) => {
          e.preventDefault();
          props.setWeight(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Size LxWxH"
        onChange={(e) => {
          e.preventDefault();
          props.setSize(e.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Network adapters"
        onChange={(e) => {
          e.preventDefault();
          props.setNetworkAdapters(e.target.value.split(", "));
        }}
      />
      <TextField
        variant="standard"
        label="USB ports"
        onChange={(e) => {
          e.preventDefault();
          props.setUsbPorts(e.target.value.split(", "));
        }}
      />
      <TextField
        variant="standard"
        label="Video ports"
        onChange={(e) => {
          e.preventDefault();
          props.setVideoPorts(e.target.value.split(", "));
        }}
      />
      <TextField
        variant="standard"
        label="Audio ports"
        onChange={(e) => {
          e.preventDefault();
          props.setAudioPorts(e.target.value.split(", "));
        }}
      />
      <TextField
        variant="standard"
        label="Wireless connections"
        onChange={(e) => {
          e.preventDefault();
          props.setWirelessConnections(e.target.value.split(", "));
        }}
      />
      <TextField
        variant="standard"
        label="Delivery set"
        onChange={(e) => {
          e.preventDefault();
          props.setDeliverySet(e.target.value.split(", "));
        }}
      />
      <TextField
        variant="standard"
        label="Operating system"
        onChange={(e) => {
          e.preventDefault();
          props.setOperatingSystem(e.target.value);
        }}
      />
    </div>
  );
}
