import { experimentalStyled as styledMUI } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CachedIcon from '@mui/icons-material/Cached';
import Button from '@mui/material/Button';
import Card from '../cards/Card'
import './Results.css';

function Results({ sorts, handleReload, result }) {

    const ItemDetail = styledMUI(Paper)(({ theme }) => ({
        marginLeft: "1rem",
        marginTop: "1rem",
        padding: "0",
        height: "fit-content",
        width: "fit-content",
        backgroundColor: "#295443",
        borderRadius: "10px",
        ":hover": {
            boxShadow: theme.shadows[10],
            cursor: "pointer",
            transform: "scale(1.05)"
        },
        "&:active": {
            boxShadow: theme.shadows[20],
            transform: "scale(1.1)"
        }
    }));

    const GridItem = styledMUI(Grid)(() => ({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        margin: "0.5rem",
        padding: "0.5rem",
        height: "fit-content",
        width: "fit-content"
    }));



    return (
        <div className='containerResults'>
            <div className='containerResults__top'>
                <h1>ENZODS</h1>
                <Button color='success' variant='contained' endIcon={<CachedIcon />} onClick={handleReload}>Restart Game</Button>
            </div>
            <div className='containerResults__bottom'>
                <span>YOU FOUND ALL THE QUEENS IN: {result} FLIPS</span>
                <h2>YOUR RESULTS:</h2>
                <Grid>
                    <span>{sorts[0].cards.length} CARDS OF: {sorts[0].suit}</span>
                    <GridItem >
                        {
                            sorts[0].cards.map((result, index) => (
                                <ItemDetail key={index}>
                                    <Card key={index} image={result.image} />
                                </ItemDetail>
                            ))
                        }
                    </GridItem>
                    <span>{sorts[1].cards.length} CARDS OF: {sorts[1].suit}</span>
                    <GridItem>
                        {
                            sorts[1].cards.map((result, index) => (
                                <ItemDetail key={index}>
                                    <Card key={index} image={result.image} />
                                </ItemDetail>
                            ))
                        }
                    </GridItem>
                    <span>{sorts[2].cards.length} CARDS OF: {sorts[2].suit}</span>
                    <GridItem>
                        {
                            sorts[2].cards.map((result, index) => (
                                <ItemDetail key={index}>
                                    <Card key={index} image={result.image} />
                                </ItemDetail>
                            ))
                        }
                    </GridItem>
                    <span>{sorts[3].cards.length} CARDS OF: {sorts[3].suit}</span>
                    <GridItem>
                        {
                            sorts[3].cards.map((result, index) => (
                                <ItemDetail key={index}>
                                    <Card image={result.image} />
                                </ItemDetail>
                            ))
                        }
                    </GridItem>
                    <span>TOTAL CARDS: {result}</span>
                </Grid>
            </div>
        </div>
    )
}

export default Results