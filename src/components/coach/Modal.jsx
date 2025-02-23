import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
  MenuItem,
  Select,
} from '@mui/material';

export const Modal = ({ isOpen, onClose, img, name, descr }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  if (!isOpen) return null;

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '10%',
            paddingBottom: '10%',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(9, 1fr)',
              gap: 2,
            }}
          >
            <Box
              sx={{
                gridColumn: '2 / span 2',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <img
                src={img}
                alt={`преподаватель ${name}`}
                style={{ width: '100%', borderRadius: 20 }}
              />
            </Box>
            <Box sx={{ gridColumn: '6 / span 4' }}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {name}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                {descr}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button href="/" variant="text">
                  facebook
                </Button>
                <Button href="/" variant="text">
                  instagram
                </Button>
              </Box>
              <Button
                variant="contained"
                onClick={onClose}
                sx={{ marginTop: 2, textTransform: 'none' }}
              >
                Закрыть
              </Button>
            </Box>
          </Box>

          <Select
            value={selectedTab}
            onChange={handleTabChange}
            displayEmpty
            sx={{ marginTop: 2, width: '100%' }}
          >
            <MenuItem value={0}>---</MenuItem>
            <MenuItem value={1}>Образование</MenuItem>
            <MenuItem value={2}>Опыт работы</MenuItem>
            <MenuItem value={3}>Награды</MenuItem>
          </Select>

          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{ marginTop: 2 }}
          >
            <Tab label="Образование" />
            <Tab label="Опыт работы" />
            <Tab label="Награды" />
          </Tabs>

          <Box sx={{ paddingTop: 2 }}>
            {selectedTab === 0 && (
              <Typography variant="body2" sx={{ paddingTop: 1 }}>
                Сентябрь 1995 — Июнь 2000
                <br />
                Санкт-Петербургский политехнический университет Петра Великого
                <br />
                Факультет: Компьютерных наук и технологий
                <br />
                Специальность: Математика и...
              </Typography>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};
