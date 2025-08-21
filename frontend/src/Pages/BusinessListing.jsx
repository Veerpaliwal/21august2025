import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from '../Helper/Helper';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function BusinessListing() {
  const [businesslisting, setBusinesslisting] = useState([]);
  const { b_listing_id } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/business_details?populate=*&filters[business_categories][documentId][$eq]=${b_listing_id}`)
      .then(response => setBusinesslisting(response?.data?.data || []))
      .catch(err => console.log(err));
  }, [b_listing_id]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Business Listing: {b_listing_id}</h2>

      <Grid container spacing={2}>
        {businesslisting.length === 0 ? (
          <Typography variant="body1">No businesses found</Typography>
        ) : (
          businesslisting.map((cv) => (
            <Grid item xs={12} sm={6} md={4} key={cv.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={cv.attributes?.image?.data?.attributes?.url || '/static/images/cards/contemplative-reptile.jpg'}
                  title={cv.attributes?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cv.attributes?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {cv.attributes?.description || 'No description available.'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/business_detail/${cv.documentId}`} style={{ textDecoration: 'none' }}>
                    <Button size="small">View Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
