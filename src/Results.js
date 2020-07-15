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
import "./App.css";
import LaunchIcon from "@material-ui/icons/Launch";
import Accordion from "@material-ui/core/Accordion";

const Results = ({ results, onClick }) => (
  <TableContainer component={Paper} class="table">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left" class="table_image">
            Image
          </TableCell>
          <TableCell class="table_subreddit" align="right">
            Subreddit
          </TableCell>
          <TableCell class="table_description" align="right">
            Description
          </TableCell>
          <TableCell class="table_url" align="right">
            View Subreddit
          </TableCell>
          <TableCell class="table_posts" align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <Avatar alt={row.title} src={row.image} />
            </TableCell>

            <TableCell align="center">
              <Link href="#" onClick={(e) => onClick(row.url)}>
                {row.title}
              </Link>
            </TableCell>
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="center">
              <Link
                children={<LaunchIcon fontSize="large"></LaunchIcon>}
                href={`https://www.reddit.com${row.url}`}
                target="_blank"
              ></Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Results;
