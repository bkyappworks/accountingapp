import React, { useState } from 'react';
import Transaction from './Transaction';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// a functional component that takes in an object containing the "apiData" prop as an argument.
const Account = ({ apiData }) => {
  // Declares a state variable named "accountNumber" and its corresponding state update function "setAccountNumber" using the useState hook
  const [accountNumber, setAccountNumber] = useState(null);
  // Declares a state variable named "displayTransactions" and its corresponding state update function "setDisplayTransactions" using the useState hook.
  const [displayTransactions, setDisplayTransactions] = useState(false);
  // sets the "accountNumber" state to the first account ID in the "apiData" prop and sets the "displayTransactions" state to true
  const handleTransactionClick = (accountId) => {
    // setAccountNumber(apiData[0].id);
    setAccountNumber(accountId)
    setDisplayTransactions(true);
  };
  // sets the "displayTransactions" state to false
  const handleViewAccountsClick = () => {
    setDisplayTransactions(false);
  };

  return apiData && !displayTransactions ? (
    // <div>
    //   <h1>Accounts</h1>
    //   {apiData.map(account => (
    //     <div key={account.id}>
    //       <p>ID: {account.id}</p>
    //       <p>Account Number: {account.account_number}</p>
    //       <p>Current Balance: {account.current_balance}</p>
    //       {/* <button onClick={() => handleTransactionClick(account.id)}>View Transactions</button> */}
    //       <button key={account.id} onClick={() => handleTransactionClick(account.id)}>
    //         Account {account.id}
    //       </button>
    //     </div>
    //   ))}
    // </div>
    
    // test
    <div>
  <Container maxWidth="md" component="main">
    <div>
    <Drawer variant="permanent">
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {/* <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton> */}
          </Toolbar>
          {/* <Divider /> */}
          <List component="nav">
          <ListItemButton 
            selected
            sx = {{
              backgroundColor: 'royalblue',
              borderRadius: '10px'
            }}>
            <ListItemText primary="View Accounts" aligh="center"/>
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <ListItemButton 
          sx = {{
            backgroundColor: 'gainsboro',
            borderRadius: '10px'
          }}>
            <ListItemText primary="View Transactions" aligh="center"/>
          </ListItemButton>
          </List>
        </Drawer>
      {/* <h1>Accounts</h1> */}
      <Grid container spacing={5} alignItems="flex-end">
        {apiData.map(account => (
          <Grid
            item
            key={account.id}
            xs={12}
            // sm={account.account_number === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <Card>
            {/* <CardHeader>
        
            </CardHeader> */}
            <CardContent>
              <div key={account.id}>
                <h2>Account Number</h2>
                {/* <p>{account.user}</p> */}
                <p>{account.account_number}</p>
                <p>Current Balance</p>
                <p align= 'right'> ${account.current_balance} </p>
                <button key={account.id} onClick={() => handleTransactionClick(account.id)}>
                  View Transactions
                </button>
              </div>
            </CardContent>

            </Card>
            
          </Grid>
        ))}
      </Grid>
    </div>
  </Container>
</div>
// end test

  ) : displayTransactions ? (
    <Transaction accountNumber={accountNumber} onViewAccountsClick={handleViewAccountsClick} />
  ) : null;
};

export default Account;