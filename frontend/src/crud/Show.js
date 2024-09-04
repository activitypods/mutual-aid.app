import React from 'react';
import { ShowBase, DateField, TextField } from 'react-admin';
import { useMediaQuery } from '@mui/material';
import { ShareButton } from '@activitypods/react';
import { ReferenceField } from '@semapps/field-components';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import MarkdownField from '../commons/fields/MarkdownField';
import ContactField from '../commons/fields/ContactField';
import ShowPage from '../layout/ShowPage';
import BodyLabel from '../commons/lists/BodyLabel';
import EditButton from '../commons/buttons/EditButton';
import ProfileField from '../commons/fields/ProfileField';
import BulletPointsListField from '../commons/fields/BulletPointsListField';
import LocationField from '../commons/fields/LocationField';
import MainList from '../commons/lists/MainList';
import PriceField from '../commons/fields/PriceField';
import { currencies } from '../config/constants';
import Details from './Details';
import Title from './Title';

const Show = () => {
  const { identity } = useCheckAuthenticated();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });
  if (!identity?.id) return null;
  return (
    <ShowBase>
      <ShowPage
        title={<Title />}
        actions={
          <>
            <ShareButton />
            <EditButton />
          </>
        }
        details={<Details />}
      >
        <MainList Label={BodyLabel}>
          <MarkdownField source="pair:description" addLabel={false} />
          <BulletPointsListField label="app.block.conditions">
            <PriceField
              source="maid:hasReciprocityCondition.maid:amount"
              currency="maid:hasReciprocityCondition.maid:currency"
              currencies={currencies}
            />
            <PriceField
              source="maid:hasReciprocityCondition.maid:maxAmount"
              currency="maid:hasReciprocityCondition.maid:currency"
              currencies={currencies}
            />
            <TextField source="maid:hasTimeCondition.maid:maxDuration" variant="body1" />
            <TextField source="maid:hasReciprocityCondition.maid:inExchangeOf" variant="body1" />
            <DateField
              showTime
              source="maid:hasTimeCondition.maid:expirationDate"
              locales={process.env.REACT_APP_LANG}
              options={{ year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
              variant="body1"
            />
          </BulletPointsListField>
          <LocationField source="maid:hasGeoCondition.pair:hasLocation" />
          <ReferenceField reference="Actor" source="dc:creator" link={false} addLabel={true}>
            <ReferenceField reference="Profile" source="url" link={false}>
              <ProfileField />
            </ReferenceField>
          </ReferenceField>
          <ContactField
            label={xs ? 'app.block.contact_poster_short' : 'app.block.contact_poster'}
            source="dc:creator"
            context="id"
          />
        </MainList>
      </ShowPage>
    </ShowBase>
  );
};

export default Show;
