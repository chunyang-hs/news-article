import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const navigate = useNavigate();

  const location: any = useLocation();

  useEffect(() => {
    if (location.state?.runType === "update") {
      setTitle(location.state.item.title);
      setPublisher(location.state.item.publisher);
      setDate(location.state.item.date);
      setSummary(location.state.item.summaries);
    }
  }, [location]);

  const handlerSubmit = () => {
    /* Here need to initiate a backend create request,and then retuen the home page. */
    navigate("/");
  };
  return (
    <div style={{ padding: 50 }}>
      <form onSubmit={handlerSubmit} style={{display:"flex",flexDirection:"column",width:500}}>
        <TextField
          required
          id="outlined-required"
          label="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          style={{marginBottom:10}}
        />
        <TextField
          required
          id="outlined-required"
          label="Publisher Of Article"
          onChange={(e) => {
            setPublisher(e.target.value);
          }}
          value={publisher}
          style={{marginBottom:10}}
        />
        <TextField
          required
          id="outlined-required"
          label="Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
          style={{marginBottom:10}}
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
          style={{marginBottom:10}}
        />

        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Create;
