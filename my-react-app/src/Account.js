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
const Account = ({ user, apiData }) => {
  // Declares a state variable named "accountNumber" and its corresponding state update function "setAccountNumber" using the useState hook
  const [accountNumber, setAccountNumber] = useState(null);
  // Declares a state variable named "displayTransactions" and its corresponding state update function "setDisplayTransactions" using the useState hook.
  const [displayTransactions, setDisplayTransactions] = useState(false);
  // sets the "accountNumber" state to the first account ID in the "apiData" prop and sets the "displayTransactions" state to true
  const handleTransactionClick = (accountId, buttonIndex) => {
    // setAccountNumber(apiData[0].id);
    setAccountNumber(accountId)
    setDisplayTransactions(true);
    setSelectedButton(1)
  };

  const [selectedButton, setSelectedButton] = useState(null);
  // sets the "displayTransactions" state to false
  const handleViewAccountsClick = (buttonIndex) => {
    setDisplayTransactions(false);
    setSelectedButton(0);
  };

  return user && apiData && !displayTransactions ? (    
    // <div>
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
          </Toolbar>
          <List component="nav">
            <h1 aligh = 'center'>Hi,{user}</h1>
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
      <Grid container spacing={5} alignItems="flex-end">
        {apiData.map(account => (
          <Grid
            item
            key={account.id}
            xs={12}
            md={4}
          >
            <Card>
            {/* <CardHeader>
        
            </CardHeader> */}
            <CardContent>
              <div key={account.id}>
                <h2>Account Number</h2>
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
// </div>

  ) : displayTransactions ? (
    <Transaction accountNumber={accountNumber} onViewAccountsClick={handleViewAccountsClick} 
    selectedButton={selectedButton}
    user = {user}/>
  ) : null;
};

export default Account;