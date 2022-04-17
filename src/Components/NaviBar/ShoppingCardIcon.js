import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ShoppingCardIcon({
  location,
  faCartShopping,
  StyledBadge,
}) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setProductList(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
    }, 1000);
  }, []);

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={productList.length ? productList.length : 0}
          color="warning"
        >
          <FontAwesomeIcon
            style={{
              color: `${
                location.pathname === "/ShoppingCard" ||
                location.pathname === "/Order"
                  ? "black"
                  : "white"
              }`,
            }}
            icon={faCartShopping}
          />
        </StyledBadge>
      </IconButton>
    </div>
  );
}