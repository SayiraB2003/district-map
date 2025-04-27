import { Box, Drawer, IconButton, styled, Typography } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <Drawer variant="persistent" hideBackdrop={true} open={isOpen}>
      <DrawerHeader>
        <Typography>How to Use this Map:</Typography>
        <IconButton onClick={() => setIsOpen(false)}>
          <ChevronLeft fontSize="Medium" />
        </IconButton>
      </DrawerHeader>
      <Box sx={{ width: 240, p: 3 }}>
        <Box>
          <p>
          The map is based using the 2019 Indices of Deprivation, with darker areas having a higher deprivation score than lighter areas.
          <br/><br/>Due to scaling issues and limited time, to zoom out beyond the innate map limit you must use your browser controls.
          <br/><br/>For best viewing experiences it is recommended you enter fullscreen mode.
          </p>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;