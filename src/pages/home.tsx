import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import { Card, CardContent, Typography, Button } from "@mui/material";
import { INewListItem } from "../interface";

const Home = () => {
  const [newsList, setNewsList] = useState<INewListItem[]>([]);
  const navigate = useNavigate();

  const getList = () => {
    axios.get("http://127.0.0.1:9630/list").then((res) => {
      setNewsList(res.data.data);
    });
  };

  const goCreate = () => {
    navigate("/create", { state: { runType: "add" } });
  };

  const updateArticle = (item: INewListItem) => {
    navigate("/create", { state: { item, runType: "update" } });
  };

  const deleteArticle = (id: number) => {
    axios
      .delete(`http://127.0.0.1:9630/delete`, {
        data: {id },
      })
      .then((res) => {
        if (res.data.code === 200) {
          getList();
        }
      });
  };

  useEffect(() => {
    getList();
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
                {item.date?.slice(0, 10)}
              </Typography>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.publisher}
              </Typography>
              <Typography variant="body2">
                <li>{item.summary}</li>
              </Typography>
            </CardContent>

            <Button
              variant="outlined"
              color="error"
              style={{ marginBottom: 10, float: "right", marginRight: 10 }}
              onClick={() => {
                deleteArticle(item.id);
              }}
            >
              Delete
            </Button>

            <Button
              variant="contained"
              style={{ marginBottom: 10, float: "right", marginRight: 10 }}
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
