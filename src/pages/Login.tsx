import { FormControl, InputGroup } from 'react-bootstrap'


function Login() {
    return (
        <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
            <FormControl 
            placeholder='Nome'
            aria-label='Nome'
            aria-describedby='basic-addon1'
            ></FormControl>
        </InputGroup>
    )
}

export default Login