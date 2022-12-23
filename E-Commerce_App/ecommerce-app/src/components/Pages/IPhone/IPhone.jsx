import React, { useState, useEffect, useContext } from "react";
// import ColorToggleButton from "../../Utilities/ColorToggleButton/ColorToggleButton";
// import RangeSlider from "../../Utilities/Slider/Slider";
import "./IPhone.css";

// import ProductShowcase from "../../Utilities/ProductShowcase/ProductShowcase";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { CurrencyContext } from "../LandingPage/LandingPage";
import AddToCart from "../../Utilities/AddToCart/AddToCart";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Pagination from "@mui/material/Pagination";

const IPhone = () => {
  const apiData = require("../../api/Store.json");

  const [products, setProducts] = useState(apiData);
  const itemsCount = [...products].length;
  console.log(products);

  const [currency] = useContext(CurrencyContext);

  const [sort, setSort] = useState("name");
  const [pageSize, setPageSize] = useState(12);

  const pagesCount = Math.ceil(itemsCount / pageSize);

  const [layout, setLayout] = useState(12);
  const [flexFlow, setFlexFlow] = useState("column");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleChangeCount = (event) => {
    setPageSize(event.target.value);
  };

  const handleLayout = (num) => {
    setLayout(num);
  };

  const handleFlexFlow = (flow) => {
    setFlexFlow(flow);
  };

  const handlePageChange = (event) => {
    console.log("Page: ", event.target.value);
  };

  useEffect(() => {
    setProducts(apiData);
  }, [apiData]);

  return (
    <div>
      <div className="store__container">
        {/*<div className="product-banner">
          <ProductShowcase />
          </div>*/}

        <div className="iphone__container__section">
          {/* <aside className="store__accessories__container">
            <div className="store__accessories__items">
              <ul className="store__accessories__list">
                <h6 className="store__sidebar__headings">ACCESSORIES</h6>
                <li className="store__accessories__item">
                  <span>Apple Car</span>
                  <span>2</span>
                </li>
                <li className="store__accessories__item">
                  <span>Air Pod & Wireless</span>
                  <span>48</span>
                </li>
                <li className="store__accessories__item">
                  <span>Cables & Docks</span>
                  <span>14</span>
                </li>
                <li className="store__accessories__item">
                  <span>Cases & Films</span>
                  <span>15</span>
                </li>
                <li className="store__accessories__item">
                  <span>Charging Devices</span>
                  <span>23</span>
                </li>
                <li className="store__accessories__item">
                  <span>Connected Home</span>
                  <span>1</span>
                </li>
                <li className="store__accessories__item">
                  <span>Headphones</span>
                  <span>95</span>
                </li>
              </ul>
            </div>
            <div className="store__accessories__prices">
              <h6 className="store__sidebar__headings">PRICES</h6>
              <RangeSlider />
            </div>
            <div className="store__accessorries__colors">
              <h6 className="store__sidebar__headings">COLOR</h6>
              <ColorToggleButton />
            </div>
        </aside>*/}
          <main className="iphone__main__container">
            <Card
              variant="outlined"
              sx={{
                padding: 0,
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <Card
                variant="none"
                sx={{
                  padding: 2,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {/* Store Products filter */}
                <Box sx={{ width: 100, marginX: 5 }}>
                  <FormControl size="small" fullWidth disabled>
                    <InputLabel id="simple-select-label-sort">
                      Sort By
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="simple-select-sort"
                      value={sort}
                      label="Sort By"
                      onChange={handleChange}
                    >
                      <MenuItem value={"name"}>Name</MenuItem>
                      <MenuItem value={"price"}>Price</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* Store No of products to display */}
                <Box sx={{ width: 100, marginX: 5 }}>
                  <FormControl size="small" fullWidth disabled>
                    <InputLabel id="simple-select-label-items">Show</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="simple-select-items"
                      value={pageSize}
                      label="Sort By"
                      onChange={handleChangeCount}
                    >
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={24}>24</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Card>
              <Card
                variant="none"
                sx={{
                  padding: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    handleLayout(12);
                    handleFlexFlow("column");
                  }}
                >
                  apps
                </span>
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    handleLayout(1);
                    handleFlexFlow("row");
                  }}
                >
                  table_rows
                </span>
              </Card>
            </Card>

            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              spacing={2}
              marginTop={3}
              marginBottom={2}
            >
              <Pagination
                onPageChange={handlePageChange}
                count={pagesCount}
                color="primary"
              />
            </Stack>

            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: `${layout}` }}
              >
                {products.map((product, index) => (
                  <Grid xs={4} sm={4} md={3} key={index}>
                    <Card
                      variant="outlined"
                      sx={{
                        minWidth: 275,
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexFlow: `${flexFlow}`,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <img width={150} src={product.image} alt="" />
                        <Typography
                          textAlign={"center"}
                          // padding={1}
                          variant="subtitle1"
                          gutterBottom
                        >
                          {product.name}
                        </Typography>
                        <Card variant="none">
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              sx={{ margin: 1 }}
                              readOnly
                            />
                          </Stack>
                          <Typography
                            textAlign={"center"}
                            variant="subtitle1"
                            gutterBottom
                          >
                            <span className="new-cost">
                              <span>{currency}</span>
                              {currency === "$"
                                ? Math.ceil(product.newPrice / 80)
                                : product.newPrice}
                            </span>
                            <span className="old-cost">
                              <span>{currency}</span>
                              {currency === "$"
                                ? Math.ceil(product.oldPrice / 80)
                                : product.oldPrice}
                            </span>
                          </Typography>
                        </Card>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <AddToCart />
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IPhone;
