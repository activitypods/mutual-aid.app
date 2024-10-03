import * as React from 'react';
import { useListContext, useCreatePath, Link, DateField, RecordContextProvider } from 'react-admin';
import { Card, CardMedia, CardContent, Box, CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { arrayOf } from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
    // marginTop: 5,
  },
  details: {
    display: 'flex',
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  image: {
    width: 180,
    minWidth: 180,
    minHeight: 145,
    backgroundColor: theme.palette.grey['300'],
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  date: {
    width: 180,
    minWidth: 180,
    minHeight: 145,
    backgroundImage: `radial-gradient(circle at 50% 14em, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    padding: 0,
    color: 'white'
  },
  day: {
    fontSize: 50,
    lineHeight: 1.3
  },
  content: {
    flex: '1 0 auto',
    flexShrink: 1,
    paddingTop: 10,
    paddingBottom: '16px !important',
    [theme.breakpoints.down('xs')]: {
      padding: 10
    }
  }
}));

const CardsList = ({ CardComponent, link }) => {
  const classes = useStyles();
  const { data, isLoading } = useListContext();
  const createPath = useCreatePath();

  return isLoading ? (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    data.map(record => {
      const image = record['pair:depictedBy'];
      const resource = arrayOf(record.type).includes('maid:Offer') ? 'offers' : 'requests';
      return (
        <Link key={record.id} to={createPath({ resource, type: link, id: record.id })} className={classes.root}>
          <Card key={record.id} className={classes.details}>
            <RecordContextProvider value={record}>
              {image ? (
                <CardMedia className={classes.image} image={Array.isArray(image) ? image[0] : image} />
              ) : (
                <CardContent className={classes.date}>
                  <DateField
                    variant="subtitle1"
                    source="dc:created"
                    locales={process.env.REACT_APP_LANG}
                    options={{ weekday: 'long' }}
                  />
                  <DateField
                    variant="h4"
                    source="dc:created"
                    locales={process.env.REACT_APP_LANG}
                    options={{ day: 'numeric' }}
                    className={classes.day}
                  />
                  <DateField
                    variant="subtitle1"
                    source="dc:created"
                    locales={process.env.REACT_APP_LANG}
                    options={{ month: 'long' }}
                  />
                </CardContent>
              )}
              <CardContent className={classes.content}>
                <CardComponent />
              </CardContent>
            </RecordContextProvider>
          </Card>
        </Link>
      );
    })
  );
};

CardsList.defaultProps = {
  link: 'show'
};

export default CardsList;
