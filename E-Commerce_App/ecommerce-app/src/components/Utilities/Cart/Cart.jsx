import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import "./Cart.css";

const TAX_RATE = 0.07;

function currencyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Cart = () => {
  return (
    <div className="cart__container">
      <h6 className="cart__container__title">Cart</h6>
      <TableContainer component={Paper}>
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
      </TableContainer>
    </div>
  );
};

export default Cart;
