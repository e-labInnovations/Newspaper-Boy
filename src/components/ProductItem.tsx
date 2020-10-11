import { IonCard, IonCardContent, IonItem, IonAvatar, IonLabel } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './ProductItem.css';

const ProductItem: React.FC<{ name: String; productCode: String; monthlyPrice: String;}> = (props) => {


  return (
    <IonCard>
      <IonCardContent>
        <IonItem button onClick={() => { }}>
          <IonAvatar slot="start">
            <img src={'https://ui-avatars.com/api/?length=3&name=' + props.productCode} />
          </IonAvatar>
          <IonLabel>
            {props.name}
            <h3>Price: {props.monthlyPrice}</h3>
          </IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductItem;
