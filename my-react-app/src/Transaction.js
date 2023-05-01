import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const Transaction = ({ accountNumber, onViewAccountsClick }) => {
  const [transactions, setTransactions] = useState([]);
  // useEffect hook is called after the first render and every time accountNumber changes. 
  // It contains an asynchronous function that fetches the transaction data from a local server using the account number as a query parameter.
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://127.0.0.1:8000/testapp/transactions/?account=${accountNumber}`);
      const data = await response.json();
      setTransactions(data);
    }
    fetchData();
  }, [accountNumber]); // To ensures that the effect is only triggered when the accountNumber prop changes.

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent">
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
          </Toolbar>
          <List component="nav">
          <ListItemButton 
            sx = {{
              border: '1px solid black'
            }}
            onClick={onViewAccountsClick}
            >
            <ListItemText primary="View Accounts" />
          </ListItemButton>
          <ListItemButton sx = {{
              border: '1px solid black'
            }}>
            <ListItemText primary="View Transactions" />
          </ListItemButton>
          </List>
      </Drawer>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* <h1>Transaction </h1> */}
      <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>      
      <React.Fragment>
      {/* <button onClick={onViewAccountsClick}>View Accounts</button> */}
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Transaction Type</th>
            <th>Note</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.note}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Transaction Type</TableCell>
            <TableCell>Note</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.transaction_type}</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell>{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </React.Fragment>
      </Paper>
      </Grid>
      </Container>
      </Box>
    </div>
  );
};

export default Transaction;