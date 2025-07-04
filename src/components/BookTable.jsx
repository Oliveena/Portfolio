import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";

export default function BookTable({ books }) {
  if (books.length === 0) return null;

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        User-Recommended Books
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Title</TableCell>
<TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, i) => (
            <TableRow key={i}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
