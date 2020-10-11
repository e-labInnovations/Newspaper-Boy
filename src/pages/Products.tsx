import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import ProductItem from '../components/ProductItem';
import './Products.css';

const Products: React.FC = () => {

  const sampleProducts = [
    {
        name : "Malayala Manorama",
        productCode : 'MN',
        MonthlyPrice : '240'
    },
    {
        name : "Mathyamam",
        productCode : 'MM',
        MonthlyPrice : '240'
    },
    {
        name : "Siraj",
        productCode : 'SRJ',
        MonthlyPrice : '240'
    }
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {sampleProducts.map(product => {
            return (
                <ProductItem name={product.name} productCode={product.productCode} monthlyPrice={product.MonthlyPrice} />
            )
        })}
        
        
        
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Products;
