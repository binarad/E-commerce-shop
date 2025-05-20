import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ProductSpecs, TabletSpecs } from "../../productData.type";

type Props = {
  specs: TabletSpecs | null;
  setSpecs: Dispatch<SetStateAction<ProductSpecs | null>>;
};

const TabletSpecsComp = ({ specs, setSpecs }: Props) => {
  const handleChange = <K extends keyof TabletSpecs>(
    key: K,
    value: TabletSpecs[K],
  ) => {
    setSpecs((prev) => ({ ...(prev as TabletSpecs), [key]: value }));
  };

  return (
    <div className="flex flex-col gap-2">
      <TextField
        variant="standard"
        type="number"
        label="Screen Size (inches)"
        value={specs?.screen_size || ""}
        onChange={(e) => handleChange("screen_size", Number(e.target.value))}
      />
      <TextField
        variant="standard"
        label="Matrix Type"
        value={specs?.matrix_type || ""}
        onChange={(e) => handleChange("matrix_type", e.target.value)}
      />
      <TextField
        variant="standard"
        type="number"
        label="Refresh Rate (GHz)"
        value={specs?.screen_refresh_rate_gz || ""}
        onChange={(e) =>
          handleChange("screen_refresh_rate_gz", Number(e.target.value))
        }
      />

      <TextField
        variant="standard"
        type="number"
        label="RAM (GB)"
        value={specs?.ram_gb || ""}
        onChange={(e) => handleChange("ram_gb", Number(e.target.value))}
      />
      <TextField
        variant="standard"
        type="number"
        label="Storage Size (GB)"
        value={specs?.storage_size || ""}
        onChange={(e) => handleChange("storage_size", Number(e.target.value))}
      />

      <FormControlLabel
        className="self-start"
        label="CD card support"
        labelPlacement="start"
        control={
          <Checkbox
            id="cd-card-support"
            className="w-12"
            value={specs?.cd_card_support || false}
            checked={specs?.cd_card_support}
            onChange={(e) => {
              handleChange("cd_card_support", e.target.checked);
              console.log(e.target.checked);
            }}
          />
        }
      />
      <TextField
        variant="standard"
        label="SD Card Format"
        value={specs?.cd_card_format || ""}
        onChange={(e) => handleChange("cd_card_format", e.target.value)}
      />
      <TextField
        variant="standard"
        label="SD Card Max Size (GB)"
        value={specs?.cd_card_max_size || ""}
        onChange={(e) => handleChange("cd_card_max_size", e.target.value)}
      />

      <h2 className="text-xl ">Front Camera</h2>
      <TextField
        variant="standard"
        type="number"
        label="Quality (MP)"
        value={specs?.front_camera_quality_mp || ""}
        onChange={(e) =>
          handleChange("front_camera_quality_mp", Number(e.target.value))
        }
      />
      <TextField
        variant="standard"
        label="Features"
        value={specs?.front_camera_features || ""}
        onChange={(e) => handleChange("front_camera_features", e.target.value)}
      />
      <TextField
        variant="standard"
        label="Placement"
        value={specs?.front_camera_placement || ""}
        onChange={(e) => handleChange("front_camera_placement", e.target.value)}
      />
      <TextField
        variant="standard"
        label="Recording Specs (comma separated)"
        value={(specs?.front_camera_recording_specs || []).join(", ") || ""}
        onChange={(e) =>
          handleChange(
            "front_camera_recording_specs",
            e.target.value.split(", ").map((s) => s.trim()),
          )
        }
      />
      <TextField
        variant="standard"
        label="Additional Features (comma separated)"
        value={(specs?.front_camera_additional_features || []).join(", ") ?? ""}
        onChange={(e) =>
          handleChange(
            "front_camera_additional_features",
            e.target.value.split(", ").map((s) => s.trim()),
          )
        }
      />

      <h2 className="text-xl ">Main Camera</h2>
      <TextField
        variant="standard"
        type="number"
        label="Quality (MP)"
        value={specs?.main_camera_quality_mp || ""}
        onChange={(e) =>
          handleChange("main_camera_quality_mp", Number(e.target.value))
        }
      />
      <TextField
        variant="standard"
        label="Features"
        value={specs?.main_camera_features || ""}
        onChange={(e) => handleChange("main_camera_features", e.target.value)}
      />
      <TextField
        variant="standard"
        label="Placement"
        value={specs?.main_camera_placement || ""}
        onChange={(e) => handleChange("main_camera_placement", e.target.value)}
      />
      <TextField
        variant="standard"
        label="Recording Specs (comma separated)"
        value={(specs?.main_camera_recording_specs || []).join(", ") || ""}
        onChange={(e) =>
          handleChange(
            "main_camera_recording_specs",
            e.target.value.split(", ").map((s) => s.trim()),
          )
        }
      />
      <TextField
        variant="standard"
        label="Additional Features (comma separated)"
        value={(specs?.main_camera_additional_features || []).join(", ") || ""}
        onChange={(e) =>
          handleChange(
            "main_camera_additional_features",
            e.target.value.split(", ").map((s) => s.trim()),
          )
        }
      />

      <h2 className="text-xl ">CPU & Battery</h2>
      <TextField
        variant="standard"
        label="CPU"
        value={specs?.cpu || ""}
        onChange={(e) => handleChange("cpu", e.target.value)}
      />
      <TextField
        variant="standard"
        label="Core Type"
        value={specs?.core_type || ""}
        onChange={(e) => handleChange("core_type", e.target.value)}
      />
      <TextField
        variant="standard"
        type="number"
        label="CPU Cores"
        value={specs?.number_of_cpu_cores || ""}
        onChange={(e) =>
          handleChange("number_of_cpu_cores", Number(e.target.value))
        }
      />
      <TextField
        variant="standard"
        label="Core Series"
        value={specs?.core_series || ""}
        onChange={(e) => handleChange("core_series", e.target.value)}
      />
      <TextField
        variant="standard"
        type="number"
        label="Core Frequency (GHz)"
        value={specs?.core_frequency_ghz || ""}
        onChange={(e) =>
          handleChange("core_frequency_ghz", Number(e.target.value))
        }
      />
      <TextField
        variant="standard"
        type="number"
        label="Battery Capacity (mAh)"
        value={specs?.battery_capacity_mah || ""}
        onChange={(e) =>
          handleChange("battery_capacity_mah", Number(e.target.value))
        }
      />

      <h2 className="text-xl ">Other</h2>
      <TextField
        variant="standard"
        label="Dust & Moisture Protection"
        value={specs?.dust_moisure_protection || ""}
        onChange={(e) =>
          handleChange("dust_moisure_protection", e.target.value)
        }
      />
      <TextField
        variant="standard"
        label="Delivery Set (comma separated)"
        value={(specs?.delivery_set || []).join(", ") || ""}
        onChange={(e) =>
          handleChange(
            "delivery_set",
            e.target.value.split(", ").map((s) => s.trim()),
          )
        }
      />
      <TextField
        variant="standard"
        label="Wireless Technologies (comma separated)"
        value={(specs?.wireless_technologies || []).join(", ") || ""}
        onChange={(e) =>
          handleChange(
            "wireless_technologies",
            e.target.value.split(", ").map((s) => s.trim()),
          )
        }
      />
      <TextField
        variant="standard"
        label="Color"
        value={specs?.color || ""}
        onChange={(e) => handleChange("color", e.target.value)}
      />
      {/* <TextField
        variant="standard"
        label="Screen Size"
        type="number"
        value={specs?.screen_size || ""}
        onChange={(e) => handleChange("screen_size", Number(e.target.value))}
      />
      <TextField
        variant="standard"
        label="Matrix Type"
        value={specs?.matrix_type || ""}
        onChange={(e) => handleChange("matrix_type", e.target.value)}
      />
      <TextField
        variant="standard"
        label="Screen Refresh Rate (Hz)"
        type="number"
        value={specs?.screen_refresh_rate_gz || ""}
        onChange={(e) =>
          handleChange("screen_refresh_rate_gz", Number(e.target.value))
        }
      />
      <TextField
        variant="standard"
        label="Storage Size (GB)"
        type="number"
        value={specs?.storage_size || ""}
        onChange={(e) => handleChange("storage_size", Number(e.target.value))}
      />
      <TextField
        variant="standard"
        label="RAM (GB)"
        type="number"
        value={specs?.ram_gb || ""}
        onChange={(e) => handleChange("ram_gb", Number(e.target.value))}
      />
      <TextField
        variant="standard"
        label="Color"
        value={specs?.color || ""}
        onChange={(e) => handleChange("color", e.target.value)}
      />
      <TextField
        variant="standard"
        label="Battery Capacity (mAh)"
        type="number"
        value={specs?.battery_capacity_mah || ""}
        onChange={(e) =>
          handleChange("battery_capacity_mah", Number(e.target.value))
        }
      /> */}
    </div>
  );
};

export default TabletSpecsComp;
