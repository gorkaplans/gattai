import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from 'react';


export default function GalleryGrid() {
    const [isMobile, setIsMobile] = useState(false);
    function handleResize() {
        setIsMobile(window.innerWidth < 960);
      }
        // Agregar el event listener para manejar el resize
  window.addEventListener('resize', handleResize);

  // Eliminar el event listener cuando se desmonta el componente
  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return (
        <Box sx={{ width: '100%' }}>
            <ImageList variant="masonry" cols={isMobile? '1' : '2'} gap={12}>
                <div className='text-blue-gattai font-larken'>
                    <p>
                    En Gattai vuestra boda pasará a ser nuestro proyecto e iremos tan lejos como queráis. Creamos identidades gráficas para las bodas que se pueden trasladar a cualquier nivel.</p>
                    <br></br>
                    <p>Desde las invitaciones, sittings, menús... hasta cualquier idea loca de regalo para invitados o elementos de decoración del espacio.</p>
                    <br></br>
                    <p>Os queremos conocer ver como vibráis y conseguir que todo lo que hagamos sea único para vuestro día más especial.</p>
                    <br></br>
                    </div>
                    <br></br>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    
    {
        img: 'https://cdn.discordapp.com/attachments/1101456837330608218/1101456874827689984/21112019-DAG07390.jpg',
        title: 'CONO',
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1101456837330608218/1101457500387152044/paper-mockup-scene.png',
        title: 'SAY YES',
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1101456837330608218/1101457827043745873/LoreAlex-1206.jpg',
        title: 'NEON',
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1101456837330608218/1101457865283211274/LoreAlex-1075.jpg',
        title: 'TEQUILA',
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1101456837330608218/1101457952184995880/453ee08b-e6fe-4d40-9938-5bab79f6f329.jpg',
        title: 'INIVI MONTAÑA',
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1101456837330608218/1101458223631958016/Rectangle_2.jpg',
        title: 'INIVI RED',
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1101456837330608218/1101468777377452062/Rectangle-2.jpg',
        title: 'INIVI RED',
    },
];

