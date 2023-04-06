import { SiAdobephotoshop, SiVlcmediaplayer } from 'react-icons/si'
import { GoFileMedia } from 'react-icons/go'
import { BiMoviePlay } from 'react-icons/bi'

export const galleryMenuItems = [
    {
        title:'All',
        id:'all',
        link:'/all',
        icon: <SiVlcmediaplayer />
    },
    {
        title:'Photo',
        id:'photo',
        link:'/photo',
        icon: <GoFileMedia />
    },
    {
        title:'Video',
        id:'video',
        link:'/video',
        icon: <BiMoviePlay />
    },
    {
        title:'Design',
        id:'design',
        link:'/design',
        icon: <SiAdobephotoshop />
    }
]