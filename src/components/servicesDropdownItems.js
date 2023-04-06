import { SiAdobephotoshop } from 'react-icons/si'
import { GoFileMedia } from 'react-icons/go'
import { BiMoviePlay } from 'react-icons/bi'

export const servicesDropdownItems = [
    {
        title:'Photography',
        id:'navItem',
        link:'/photo',
        icon: <GoFileMedia />
    },
    {
        title:'Videography',
        id:'navItem',
        link:'/video',
        icon: <BiMoviePlay />
    },
    {
        title:'Design',
        id:'navItem',
        link:'/design',
        icon: <SiAdobephotoshop />
    }

]