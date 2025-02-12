'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  AppBar, Toolbar, Typography, InputBase, Avatar, 
  Card, CardContent, Button, Grid, Box, Container,
  IconButton, useTheme, Badge 
} from '@mui/material';
import { Search, Notifications, Games, Timeline, Star } from '@mui/icons-material';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              WorldoWorld Gaming
            </motion.span>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              position: 'relative',
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 300
            }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search games..."
              />
              <IconButton sx={{ p: '10px' }}>
                <Search />
              </IconButton>
            </Box>
            <IconButton>
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <Avatar sx={{ cursor: 'pointer' }}>N</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ 
                bgcolor: 'background.paper',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/game-banner.jpg")',
                backgroundSize: 'cover',
                color: 'white',
                mb: 3
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    WorldoWorld Duty
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Experience the next generation of gaming with WorldoWorld Duty. 
                    Immerse yourself in stunning graphics, strategic gameplay, and 
                    intense multiplayer action.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      startIcon={<Games />}
                    >
                      Play Now
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="inherit" 
                      startIcon={<Star />}
                    >
                      53 Reviews
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>

            <Grid container spacing={2}>
              {['Uncharted 4', 'Dishonored', 'God of War', 'Cyberpunk 2077'].map((game, index) => (
                <Grid item xs={12} sm={6} key={game}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {game}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Experience the epic adventure in stunning detail.
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Gaming Statistics
                  </Typography>
                  <Box sx={{ textAlign: 'center', my: 3 }}>
                    <Typography variant="h3">12,340h</Typography>
                    <Typography color="text.secondary">Total Playtime</Typography>
                  </Box>
                  <Grid container spacing={2}>
                    {[
                      { game: 'Dota 2', hours: '2,340h' },
                      { game: 'CS:GO', hours: '5,420h' },
                      { game: 'Fortnite', hours: '4,580h' }
                    ].map((stat) => (
                      <Grid item xs={4} key={stat.game}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h6">{stat.hours}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.game}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
