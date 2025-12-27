"use client"

import { Container, Grid, IconButton, Typography } from '@mui/material';
import dayjs from '@/utils/date';
import { useCallback, useMemo, useState } from 'react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

export default function Home() {
  const [month, setMonth] = useState<number>(0);

  const selectedMonth = useMemo(() => (dayjs().add(month, 'month').calendar('jalali').locale('fa')), [month]);

  const handleMonthChange = useCallback((task: 'prev' | 'next' | 'reset') => () => {
    if (task === 'reset') return setMonth(0);

    if (task === 'prev') return setMonth(prev => prev - 1);

    if (task === 'next') return setMonth(prev => prev + 1);
  }, []);

  return (
    <Container disableGutters sx={{ p: '20px 60px' }}>
      <Typography sx={{ fontSize: '22px', fontWeight: 500, textAlign: 'center', width: '100%' }}>
        Welcome to Expenses Tracker
      </Typography>
      <Grid container sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', justifyContent: 'center', gap: '50px', alignItems: 'center', py: '20px', width: '100%', borderRadius: '14px', mt: '20px' }}>
        <IconButton onClick={handleMonthChange('prev')} sx={{ color: '#fff' }}>
          <ArrowBackIosNew />
        </IconButton>
        <Typography onClick={handleMonthChange('reset')} sx={{ ':hover': { cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px' }, color: '#fff', fontSize: '20px', fontWeight: 400, textAlign: 'center', p: '4px', transition: 'border 0.3s ease-out' }}>
          {selectedMonth.format('YYYY, MMMM')}
        </Typography>
        <IconButton onClick={handleMonthChange('next')} sx={{ color: '#fff' }}>
          <ArrowForwardIos />
        </IconButton>
      </Grid>
      <Container disableGutters sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', borderRadius: '14px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexWrap: 'wrap', mt: '30px', gap: '10px', p: '15px', justifyContent: 'flex-start' }}>
        {Array.from({ length: selectedMonth.daysInMonth() }).map((_, index) => (
          <Grid key={index} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '14px', height: '80px', width: '80px' }}>
            {index + 1}
          </Grid>
        ))}
      </Container>
    </Container>
  );
}
