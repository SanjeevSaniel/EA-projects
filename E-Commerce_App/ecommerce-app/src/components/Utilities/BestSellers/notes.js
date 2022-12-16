filterKey !== "all"
  ? products
      .filter((product) => product.category === filterKey)
      .map((product, index) => {
        return (
          <div key={index} className="product-card">
            {product.demand.toLowerCase() === "high" ? (
              <span
                id={`product-demand-label-${index}`}
                className="product-demand-label"
              >
                HOT
              </span>
            ) : (
              () => {
                document.getElementById(
                  `product-demand-label-${index}`
                ).style.display = "none";
              }
            )}

            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <p className="product-name">{product.name}</p>
            <div className="product-prices-and-rating">
              <Stack className="product-rating" spacing={1}>
                <Rating
                  name="half-rating-read"
                  // defaultValue={2.5}
                  value={product.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <div className="product-prices">
                <span className="new-cost">₹ {product.newPrice}</span>
                <span className="old-cost">₹ {product.oldPrice}</span>
              </div>
            </div>
          </div>
        );
      })
  : products.map((product, index) => {
      return (
        <div key={index} className="product-card">
          {product.demand.toLowerCase() === "high" ? (
            <span
              id={`product-demand-label-${index}`}
              className="product-demand-label"
            >
              HOT
            </span>
          ) : (
            () => {
              document.getElementById(
                `product-demand-label-${index}`
              ).style.display = "none";
            }
          )}

          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <p className="product-name">{product.name}</p>
          <div className="product-prices-and-rating">
            <Stack className="product-rating" spacing={1}>
              <Rating
                name="half-rating-read"
                // defaultValue={2.5}
                value={product.rating}
                precision={0.5}
                readOnly
              />
            </Stack>
            <div className="product-prices">
              <span className="new-cost">₹ {product.newPrice}</span>
              <span className="old-cost">₹ {product.oldPrice}</span>
            </div>
          </div>
        </div>
      );
    });
