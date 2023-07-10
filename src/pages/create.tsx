import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [timeValue, setTimeValue] = useState<Dayjs | null>(
    dayjs(dayjs().format("YYYY-MM-DD"))
  );
  const navigate = useNavigate();
  const location: any = useLocation();

  useEffect(() => {
    if (location.state?.runType === "update") {
      setTitle(location.state.item.title);
      setPublisher(location.state.item.publisher);
      setTimeValue(dayjs(location.state.item.date));
      setSummary(location.state.item.summary);
    }
  }, [location]);

  const handlerSubmit = () => {
    /* Here need to initiate a backend create request,and then retuen the home page. */
    if (location.state?.runType === "add") {
      axios.post("http://127.0.0.1:9630/create", {
        title,
        publisher,
        summary,
        date: dayjs(timeValue).format("YYYY/MM/DD"),
      });
    } else if (location.state?.runType === "update") {
      axios.put("http://127.0.0.1:9630/update", {
        title,
        publisher,
        summary,
        date: dayjs(timeValue).format("YYYY/MM/DD"),
        id: location.state.item.id,
      });
    }
    navigate("/");
  };
  return (
    <div style={{ padding: 50, display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handlerSubmit}
        style={{ display: "flex", flexDirection: "column", width: 500 }}
      >
        <TextField
          required
          id="outlined-required"
          label="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          style={{ marginBottom: 10 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Publisher Of Article"
          onChange={(e) => {
            setPublisher(e.target.value);
          }}
          value={publisher}
          style={{ marginBottom: 10 }}
        />
        <DatePicker
          label="Controlled picker"
          value={timeValue}
          onChange={(newValue) => setTimeValue(newValue)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={4}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
          value={summary}
          style={{ marginBottom: 10, marginTop: 10 }}
        />

        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Create;
