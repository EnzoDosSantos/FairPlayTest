
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { experimentalStyled as styledMUI } from '@mui/material/styles';
import Alert from '../../alert/Alert';
import { useState } from 'react';
import Card from '../cards/Card';
import './Deck.css';

function Deck({ handleClick, cardsState }) {
    const [modal, setModal] = useState(false);
    const Item = styledMUI(Paper)(({ theme }) => ({
        backgroundColor: "#295443",
        marginLeft: "1rem",
        marginTop: "1rem",
        paddingBottom: "1rem",
        height: "250px",
        width: "200px",
        textAlign: 'center',
        color: theme.palette.text.primary,
        borderRadius: "10px",
        flexWrap: "wrap",
        overflow: "animated",
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

    const showModal = () => {
        setModal(!modal);
        if(modal === true){
            Alert.fire({
                title: 'Message',
                text: "You can only get one card every 1 second, sorry, I was asked to do it that way :(.",
                icon: 'info'
            });
        }
    }


    return (
        <div className='container'>
            <div className='container__top'>
                <h1>ENZODS</h1>
                <h2>CARDS DRAWER: {cardsState.length} / 52</h2>
                <Button startIcon={<ArrowRightIcon />} color='success' variant='contained' onClick={handleClick}>Take a card</Button>
                <Button color='success' variant='contained' onClick={showModal}>Get a hint</Button>
            </div>
            <div className='container__bottom'>
                <div onClick={showModal} className={modal ? 'show__modal' : 'disabled'}>
                    <div className='modal__container'>
                        <span className='modal__textContainer'>
                            <h4>How i can win this game?</h4>
                            <p>
                                The game is simple, you have to find all the queens in the deck.
                                <br />
                            </p>
                            <h4>Why you made this?</h4>
                            <p>
                                I made this game to improve my React skills, learn how to use MUI and obviously try to get the job :).
                                <br />
                            </p>
                            <h4>Where can I see your other projects?</h4>
                            <p>
                                You can see more of my projects in my <a href='https://enzods.vercel.app/' target='_blank'>portfolio</a>.
                                <br />
                            </p>
                            <Button variant='contained' color="success" onClick={showModal}>Close</Button>
                        </span>
                    </div>
                </div>
                {
                    cardsState.length === 0 ? <span className='container__bottom__alert'>TAKE A CARD TO START THE GAME!</span> : 

                <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {

                        cardsState.map((card, index) =>
                            <Item key={index}>
                                <Card
                                    image={card.image}
                                    value={card.value}
                                    suit={card.suit}
                                />
                            </Item>
                        )
                    }
                </Grid>
                }
            </div>
        </div>
    )
}

export default Deck