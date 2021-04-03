import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./CartWidget.css";


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart" >
      <StyledBadge badgeContent={0} color="secondary" showZero>
        <ShoppingCartIcon className = "CartColor" />
      </StyledBadge>
    </IconButton>
  );
}
