import './pageStyle.scss'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import AnimatedShapes from '../components/AnimatedShapes';
import { useHistory } from 'react-router';

import styled from "styled-components";

const shape = `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const IntroShape = styled.div`
  ${shape}
  clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 42% 100%);
  background-color: crimson;
`;

const user = [
    {
        email: 'abc@gmail.com',
        password: 'password123',
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    button: {
        width: '40%',
    }
}));

const Login = () => {
    const history = useHistory();
    const classes = useStyles();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (email && password) {
            try {
                user && user.find(ele => {
                    if (ele.email === email && ele.password === password) {
                        history.push({
                            pathname: '/dashboard',
                            state: { successMsg: 'Hi! You are Logged in successfully' }
                        });
                    } else {
                        alert('Wrong email or password!!');
                        console.log('Wrong email or password!!');
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className='login'>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleClick}>
                <TextField id="email" label="Email-Id" type="text" variant="outlined"
                    placeholder="abc@gmail.com" onChange={(e) => setemail(e.target.value)}
                />
                <TextField id="password" label="Password" type="password" variant="outlined"
                    placeholder="password123" onChange={(e) => setPassword(e.target.value)}
                />
                <Button className={classes.button} variant="contained" type="submit" color="primary">
                    Log In
                </Button>
            </form>
            <AnimatedShapes />
            <IntroShape />
        </div>
    )
}

export default Login
