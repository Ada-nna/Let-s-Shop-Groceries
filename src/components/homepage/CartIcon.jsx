import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  SwipeableDrawer,
  Box,
  Slide,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { UseCartContext } from "./CartContext";

const CartIcon = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cartItems, setCartItems } = UseCartContext();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const removeFromCart = (itemId) => {
    setCartItems((currentItems) => {
      // currentItems.filter((item) => item.id !== itemId)
      return currentItems.reduce((newCart, item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            newCart.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          newCart.push(item);
        }
        return newCart;
      }, []);
    });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        let quantity = parseFloat(item.quantity) || 0;
        let price = parseFloat(item.selling_price);

        if (isNaN(price)) {
          console.error(
            `Missing price for item: ${item.name}, Quantity: ${quantity}, Price: ${price}`
          );
          return total;
        }

        if (isNaN(quantity)) {
          console.error(
            `Quantity not set for item: ${item.name}, using default quantity of 0.`
          );
        }

        return total + quantity * price;
      }, 0)
      .toFixed(2);
  };

  const drawerStyles = {
    width: window.innerWidth > 600 ? "100%" : "95%",
  };

  const getStyles = () => {
    return {
      width: window.innerWidth > 600 ? "100%" : "80%",
      backgroundColor: "#198057",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "8px",
      padding: 10,
    };
  };

  return (
    <>
      <button
        onClick={toggleDrawer(true)}
        type="button"
        className="relative"
        aria-label="Open cart"
      >
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9 8h12"
              stroke="#000"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </>
        <p className="absolute -top-3 left-4 text-[#198057] font-semibold h-[1.5rem] w-[1.5rem] lg:h-[2rem] lg:w-[2rem] rounded-full flex justify-center items-center">
          {cartItems.length}
        </p>
      </button>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          style: drawerStyles,
        }}
        transitionprops={{
          component: Slide,
          direction: "left",
          timeout: {
            enter: 250,
            exit: 200,
          },
        }}
      >
        <Box
          sx={{
            width: 400,
            padding: {
              xs: 1,
              sm: 1,
              md: 3,
            },
            minHeight: "100%",
            overflowY: "auto",
            bgcolor: "background.paper",
          }}
        >
          <ListItemButton style={getStyles()}>
            Cart Items
            <Button
              onClick={toggleDrawer(false)}
              sx={{
                margin: "0px",
                padding: 0,
                height: "32px",
                minWidth: "32px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Button>
          </ListItemButton>

          {/* FETCHING ALL THE LISTS DIRECTLY FROM THE MODAL */}
          <List
            sx={{
              width: { xs: "80%", sm: "80%", md: 350 },
              margin: { xs: 1, sm: 1, md: "auto" },
            }}
          >
            <List
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                padding: 0,
              }}
            >
              {cartItems.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className=" border mr-3 h-[4rem] flex items-center justify-center p-2">
                    <img
                      src={`https://backendgrocery.000webhostapp.com/${item.images}`}
                      alt={item.name}
                      className="w-[3.5rem]"
                    />
                  </div>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <>
                        <Typography>Quantity:{item.quantity}</Typography>
                        <Typography>${item.selling_price}</Typography>
                      </>
                    }
                  />
                  <Button onClick={() => removeFromCart(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </Button>
                </ListItem>
              ))}
            </List>
          </List>

          {/* CHECKOUT BTN STARTS HERE..... */}

          <div style={{ position: "fixed", bottom: 25, width: "80%" }}>
            <List>
              <ListItemText
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                primary="Subtotal:"
                primaryTypographyProps={{
                  style: { fontSize: "20px", fontWeight: 700 },
                }}
                secondary={`$ ${calculateTotal()}`}
                secondaryTypographyProps={{
                  style: { fontSize: "20px", fontWeight: 700 },
                }}
              ></ListItemText>

              <Button
                style={{
                  backgroundColor: "#198057",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "8px",
                  padding: 10,
                  width: "100%",
                }}
              >
                <Link to="/checkout">Checkout</Link>
              </Button>
            </List>
          </div>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default CartIcon;
