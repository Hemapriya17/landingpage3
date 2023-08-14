import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box>
      <img onClick={onClick} height={'70'} width={'200px'} src="/images/ColorLogo.png"></img>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
