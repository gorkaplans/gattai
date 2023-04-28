import '../index.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center'
  }));

export default function GalleryGridItem(link, height) {
    return (
        <Item sx={{ height }} >
            <div className='bg-sky-500'>
                <img source={link}></img>
            </div>
        </Item>
    );
}