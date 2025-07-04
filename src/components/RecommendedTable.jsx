// RecommendedTable.jsx
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";

export default function RecommendedTable({ books }) {
  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        Recommended Books
      </Typography>
      <div style={{ overflowX: "auto" }}>
      <Table className="recommended-table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, idx) => (
            <TableRow key={idx}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </>
  );
}
