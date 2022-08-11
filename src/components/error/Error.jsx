import { Button } from '@mui/material'

function Error({ message, handleReload }) {
  return (
    <>
    <div>Sorry an error has occurred</div>
    <span>The error was: {message}</span>
    <Button variant='contained' color="success" onClick={handleReload}>Reload Page</Button>
    </>
  )
}

export default Error