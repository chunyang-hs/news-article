import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "../mock/newsList";

import { Card, CardContent, Typography, Button } from "@mui/material";
import { INewListItem } from "../interface";

const Home = () => {
  const [newsList, setNewsList] = useState<INewListItem[]>([]);
  const navigate = useNavigate();

  const goCreate = () => {
    navigate("/create",{state:{runType:'add'}});
  };

  const updateArticle = (item: INewListItem) => {
    navigate("/create",{state:{item,runType:'update'}});
  };

  useEffect(() => {
    axios.get("/api/news").then((res) => {
      setNewsList(res.data.data);
    });
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <Button
        variant="contained"
        style={{ marginBottom: 10 }}
        onClick={goCreate}
      >
        Add Article
      </Button>

      {newsList.map((item) => {
        return (
          <Card sx={{ minWidth: 275, marginBottom: 5 }} key={item.id}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.publisher}
              </Typography>
              <Typography variant="body2">
                {item.summaries?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              style={{ marginBottom: 10, float: "right" ,marginRight:10}}
              onClick={() => {
                updateArticle(item);
              }}
            >
              Update Article
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
