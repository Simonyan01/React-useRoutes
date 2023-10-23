import { useEffect, useState } from "react";
import PaginationMUI from "../components/MUI_pagination/pagination/PaginationMUI";
import { CircularProgress, Container } from "@mui/material";
import Boxes from "../components/MUI_pagination/Box/Boxes";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/photos";

const Products = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const limit = 10;

  const fetchData = (page) => {

    try {
      axios
        .get(url, {
          params: {
            _page: page,
          },
        })
        .then((response) => {
          setData(response.data);
          setIsOpen(false);
        });
    } catch (err) {
      console.error(`Something is wrong: ${err}`);
    } finally {
      setTimeout(() => {
        setIsOpen(true);
      }, 1500);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <Container className="max-w-full">
      {!isOpen ? (
        <CircularProgress
          sx={{
            display: "flex",
            margin: "8rem auto 6rem",
          }}
        />
      ) : (
        <Boxes data={data} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <PaginationMUI
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
      />
    </Container>
  )
}

export default Products