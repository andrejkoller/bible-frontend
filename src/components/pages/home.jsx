import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="brand">
          <h1>BibleVersion</h1>
          <p>
            The Bible is a collection of religious texts or scriptures sacred to
            Christians. Dive into the Bible and start reading today.
          </p>
        </div>
        <div className="button-container">
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            color="primary"
          >
            Start Reading
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
