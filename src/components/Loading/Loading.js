import { CircularProgress } from '@material-ui/core'
import React from 'react'

import { LoadingContainer } from './styles'

const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress color='primary' size={'50px'} />
        </LoadingContainer>
    )
}

export default Loading