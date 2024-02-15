import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import questions from '../QuizData/QuizData';
import { QuizzResult } from './QuizzResult';

export const Quiz = () => {
    const [currentQuestions, setCurrentQuestions] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [correctAns, setCorrectAns] = useState(0)
    const [clicked, setClicked] = useState(false)
    
    const handleScore = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 5)
            setCorrectAns(correctAns + 1)
        }
        setClicked(true)
    }
    const handleNextOptions = () => {
        const nextValue = currentQuestions + 1
        if (nextValue < questions.length) {
            setCurrentQuestions(nextValue)
        } else {
            setShowResult(true)
        }
        setClicked(false)
    }
    const handlePlayAgain = () => {
        setScore(0)
        setCorrectAns(0)
        setCurrentQuestions(0)
        setShowResult(false)
    }
    return (
        <>
            {showResult == true ? <QuizzResult handlePlayAgain={handlePlayAgain} score={score} correctAns={correctAns} /> : <Box sx={{ width: { xl: '650px', lg: '650px', md: '600px', sm: '500px', xs: '400px' }, minHeight: '180px', m: '5rem auto', bgcolor: '#242D4A', borderRadius: '1rem' }}>
                <Paper elevation={8} sx={{ padding: '2rem', minHeight: '180px', bgcolor: '#242D4A', borderRadius: '1rem' }}>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            
                            <Typography variant='h5' sx={{ color: 'white' }}>
                                Score : {score}
                            </Typography>
                            <Typography variant='h5' sx={{ color: 'white' }}>
                                Question {currentQuestions + 1} of 4
                            </Typography>
                            <Typography variant='h6' sx={{ color: 'white' }}>
                                {questions[currentQuestions].questionText}
                            </Typography>
                           
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {questions[currentQuestions].answerOptions?.map((item, key) => {
                                    return (
                                        <Button
                                            disabled={clicked}
                                            onClick={() => handleScore(item.isCorrect)}
                                            key={key}
                                            sx={{
                                                bgcolor: clicked && item.isCorrect ? 'green' : 'inherit',
                                                borderRadius: '1rem',
                                                border: '3px solid #1F4468',
                                                color: 'white',
                                            }}>
                                            <Typography sx={{ marginRight: 'auto' }}>
                                                {item?.answerText}
                                            </Typography>

                                        </Button>
                                    )
                                })}
                                <Box sx={{
                                    display: 'flex', gap: '10px', justifyContent: 'center'
                                }}>
                                    <Button onClick={handlePlayAgain} variant='contained' sx={{
                                        bgcolor: '#77C4FF', borderRadius: '10px', padding: '5px 2rem', '&:hover': {
                                            bgcolor: '#147d97',
                                        },
                                    }}>Quit</Button>
                                    <Button
                                        onClick={handleNextOptions}
                                        disabled={!clicked}
                                        variant='contained' sx={{
                                            color: 'white',
                                            bgcolor: '#77C4FF', borderRadius: '10px', padding: '5px 2rem', '&:hover': {
                                                bgcolor: '#147d97',
                                            },
                                        }}>Next</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box >}
        </>
    )
}