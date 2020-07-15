import React, { Component, Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

const Results = ({ results, onClick }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell align="right">Subreddit</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">URL</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <Avatar alt={row.title} src={row.image} />
            </TableCell>
            <TableCell align="right">{row.title}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">
              <Link
                children="Visit Subreddit"
                href={`https://www.reddit.com${row.url}`}
                target="_blank"
              ></Link>
            </TableCell>
            <TableCell>
              <Link
                children="Recent Posts"
                href="#"
                onClick={(e) => onClick(row.url)}
              ></Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Results;
