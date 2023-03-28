import { SiAdobephotoshop, SiVlcmediaplayer } from 'react-icons/si'
import { GoFileMedia } from 'react-icons/go'
import { BiMoviePlay } from 'react-icons/bi'

export const galleryMenuItems = [
    {
        title:'All',
        id:'all',
        link:'#',
        icon: <SiVlcmediaplayer />
    },
    {
        title:'Photo',
        id:'photo',
        link:'#',
        icon: <GoFileMedia />
    },
    {
        title:'Video',
        id:'video',
        link:'#',
        icon: <BiMoviePlay />
    },
    {
        title:'Design',
        id:'design',
        link:'#',
        icon: <SiAdobephotoshop />
    }
]