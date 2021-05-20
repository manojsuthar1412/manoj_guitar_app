import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardComponent = ({ data }) => {
  const handleDelete = (id) => {
    const dataUrl = `http://localhost:5000/guitars/${id}`;
    axios.delete(dataUrl);
    window.location.reload();
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={data.photo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Color: </strong>
            {data.color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Height: </strong>
            {data.height}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Width: </strong>
            {data.width}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Link to={data.id}>
          <Button size="small" variant="contained" color="primary">
            Edit
          </Button>
        </Link>
        <Button
          size="small"
          color="secondary"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(CardComponent);
