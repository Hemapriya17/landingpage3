import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Test Library',
    description: 'Boost Efficiency with our Test Library for Seamless Testing.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Inventory Test',
    description: 'Streamline Workflows: Test Input & Inventory Management',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Auto Analysis',
    description: 'AI engine handles calculations, offers insightful analysis.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Live Test Charts',
    description: 'Real-time interactive charts for dynamic test insights.',
    icon: <ContactSupportIcon />,
  },
]
