import React, { useContext } from "react";
import { ShoeContext } from "../context/ShoeContext";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  linkItem: {
    textDecoration: "none",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const Men = () => {
  const { shoes } = useContext(ShoeContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6}>
        {shoes.map((tile) =>
          tile.gender == "MEN" ? (
            <GridListTile key={tile.id}>
              <img src={tile.imageURL} alt={tile.name} />
              <Link to={`/men/${tile.id}`} className={classes.linkItem}>
                <GridListTileBar
                  title={tile.name}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${tile.name}`}>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </Link>
            </GridListTile>
          ) : null
        )}
      </GridList>
    </div>
  );
};

export default Men;
