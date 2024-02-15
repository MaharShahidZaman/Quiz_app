import React from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import questions from '../QuizData/QuizData'

export const QuizzResult = (props) => {
    return (
        <>
            <Box sx={{ width: {xl:'650px', lg:'650px', md:'600px', sm:'500px', xs:'400px'}, minHeight: '180px', m: '5rem auto', bgcolor: '#242D4A', borderRadius: '1rem' }}>
                <Paper elevation={8} sx={{ padding: '2rem', minHeight: '180px', bgcolor: '#242D4A', borderRadius: '1rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h4' sx={{ color: 'white' }}>
                            Completed!
                        </Typography>
                        <Typography variant='h5' sx={{ color: 'white' }}>
                            Total Score {props.score}/20
                        </Typography>
                        <Typography variant='h6' sx={{ color: 'white' }}>
                            Your Correct Question {props.correctAns} out of {questions.length}
                        </Typography>

                        <Box>
                            <Button 
                            onClick={props.handlePlayAgain}
                                sx={{
                                    borderRadius: '1rem',
                                    border: '3px solid #1F4468',
                                    color: 'white',
                                    padding: '5px 5rem'
                                }}>
                                <Typography sx={{ marginRight: 'auto' }}>
                                    Play Again
                                </Typography>

                            </Button>
                        </Box>
                    </Box>

                </Paper>
            </Box>
        </>
    )
}
