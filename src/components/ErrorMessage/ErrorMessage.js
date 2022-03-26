import React from 'react'
import { ErrorContainer, ErrorText } from './styles'

const ErrorMessage = ({ message }) => {
    return (
        <ErrorContainer>
            <ErrorText>{message}</ErrorText>
        </ErrorContainer>
    )
}

export default ErrorMessage