import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const PaginationMUI = ({ limit, setCurrentPage }) => {

  return (
    <Container>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        color="primary"
        onChange={(_, newPage) => setCurrentPage(newPage)}
        count={limit}
        size="large"
      />
    </Container>
  )
}

export default PaginationMUI