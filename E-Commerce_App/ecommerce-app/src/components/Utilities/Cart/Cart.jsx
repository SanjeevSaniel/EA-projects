import React, { useContext } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputAdornment from "@mui/material/InputAdornment";
import "./Cart.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { CartContext } from "./../../Pages/LandingPage/LandingPage";

// const TAX_RATE = 0.07;

// function currencyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Cart = () => {
  // const products = require("../../api/bestSellers.json");

  const [cart, setCart] = useContext(CartContext);

  const removeFromCart = (id) => {
    const newCart = cart.filter((c) => c._id !== id);
    setCart(newCart);
    localStorage.setItem("Cart", JSON.stringify(newCart));
    console.log(newCart);
  };

  return (
    <div className="cart__container">
      <h6 className="cart__container__title">Cart</h6>

      <section className="container-grid">
        <Table>
          <thead>
            <tr>
              <th></th>
              <th colSpan={2}>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    style={{ width: "4rem", height: "4rem" }}
                    src={product.image}
                    alt=""
                  />
                </td>
                <td style={{ textAlign: "left" }}>{product.name}</td>
                <td>{product.quantity ? product.quantity : 0}</td>
                <td>{product.newPrice}</td>
                <td>{product.newPrice * 2}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(product._id)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <aside className="cart-totals">
          <Table>
            <tbody>
              <tr>
                <td>Number Of Items</td>
                <td>{cart.length}</td>
              </tr>
              <tr>
                <td>Total Cost</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </aside>
      </section>

      {/*<TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>PRODUCT</TableCell>
              <TableCell align="right" sx={{ minWidth: 30 }}>
                QTY
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 50 }}>
                UNIT PRICE
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 50 }}>
                PRICE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell align="center">x</TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{currencyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={4} />
              <TableCell rowSpan={4} align="justify">
                <OutlinedInput
                  sx={{ maxWidth: 300, paddingRight: 20 }}
                  size="small"
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                  aria-describedby="outlined-coupon-helper-text"
                  inputProps={{
                    "aria-label": "coupon",
                  }}
                />
                <Button
                  variant="contained"
                  onClick={() => {
                    alert("clicked");
                  }}
                >
                  Redeem
                </Button>
              </TableCell>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">
                {currencyFormat(invoiceSubtotal)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">
                {currencyFormat(invoiceTaxes)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {currencyFormat(invoiceTotal)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell rowSpan={2} colSpan={1} align="center">
                <Button
                  variant="contained"
                  onClick={() => {
                    alert("clicked");
                  }}
                >
                  Check Out
                </Button>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
                </TableContainer>*/}
    </div>
  );
};

export default Cart;
