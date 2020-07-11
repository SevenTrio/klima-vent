import React from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => createStyles({
    city: {
        marginLeft: 30
    },
    cityName: {
        // fontWeight: 600,
        borderBottom: '1px dashed '+theme.palette.primary.contrastText,
        cursor: 'pointer',
        '&:hover': {
            borderBottom: 'none',
            paddingBottom: 1,
        }
    },
    modal: {
        position: 'absolute',
        top: 50,
        left: 50,
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

const City = ({ setCity, sitiesList, currentCity }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(currentCity);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        currentCity.id !== value.id && setCity(value.id);
    };

    return(
        <div className={classes.city}>
            Город: <span className={classes.cityName} onClick={handleOpen}>{currentCity.name}</span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modal}>
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>

                    <Autocomplete
                        id="combo-box-demo"
                        options={sitiesList}
                        value={value}
                        onChange={(event, newValue) => {
                            newValue !== null && setValue(newValue);
                        }}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </div>
            </Modal>
        </div>
    )
};

export default City;


