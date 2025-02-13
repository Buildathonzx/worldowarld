'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  AppBar, Toolbar, Typography, InputBase, Avatar, 
  Card, CardContent, Button, Grid, Box, Container,
  IconButton, useTheme, Badge 
} from '@mui/material';
import { Search, Notifications, Games, Timeline, Star } from '@mui/icons-material';
import { metadata } from './metadata';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" className="gradient-text" sx={{ fontWeight: 'bold' }}>
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
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/game-banner.jpg")',
                backgroundSize: 'cover',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(156,39,176,0.4) 0%, rgba(106,27,154,0.4) 100%)',
                  zIndex: 1
                }
              }}>
                <CardContent sx={{ position: 'relative', zIndex: 2, p: 4 }}>
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
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card sx={{
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(156,39,176,0.2), transparent)',
                        transition: 'all 0.5s',
                      },
                      '&:hover::after': {
                        left: '100%',
                      }
                    }}>
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
              <Card sx={{
                background: 'rgba(41, 37, 56, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(156,39,176,0.3)',
              }}>
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
