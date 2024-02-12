import './NavBar.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';




export default function NavBar(){
    
  return (
    <div className="divbar">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
        <Typography sx={{ minWidth: 150}}>Home</Typography>
        <Typography sx={{ minWidth: 150}}>About</Typography>
        <Typography sx={{ minWidth: 180}}>Administration</Typography>
        <Typography sx={{ minWidth: 150}}>Academic</Typography>
        <Typography sx={{ minWidth: 150}}>Admission</Typography>
        <Typography sx={{ minWidth: 150}}>Gallery</Typography>
        <Typography sx={{ minWidth: 150}}>Notice</Typography>
        <Typography sx={{ minWidth: 150}}>Contact</Typography>
      </Box>
      </div>
      

  );
}