import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, TouchableOpacity, 
  ScrollView, SafeAreaView, FlatList 
} from 'react-native';

const PRODUCT_VARIANTS = [
  { 
    id: '1', 
    colorName: 'Rosa Liso', 
    colorCode: '#E91E63', 
    image: require('./assets/pink-garment.jpg') 
  },
  { 
    id: '2', 
    colorName: 'Estampa Ursos', 
    colorCode: '#D2B48C', 
    image: require('./assets/bear-pattern.jpg') 
  },
  { 
    id: '3', 
    colorName: 'Azul Liso', 
    colorCode: '#00BCD4', 
    image: require('./assets/blue-garment.jpg') 
  },
  { 
    id: '4', 
    colorName: 'Estampa Love', 
    colorCode: '#FFEB3B', 
    image: require('./assets/yellow-pattern.jpg') 
  },
];

const SIZES = ['P', 'M', 'G', 'GG'];

export default function App() {
  const [selectedVariant, setSelectedVariant] = useState(PRODUCT_VARIANTS[0]);
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Imagem Principal Dinâmica */}
        <View style={styles.imageContainer}>
          <Image 
            source={selectedVariant.image} 
            style={styles.mainImage} 
            resizeMode="cover"
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.brand}>W PET</Text>
          <Text style={styles.title}>Capa de Proteção Confort - Edição Especial</Text>
          <Text style={styles.price}>R$ 89,90</Text>

          {/* Seleção de Cores/Modelos */}
          <Text style={styles.sectionTitle}>Selecione o Modelo:</Text>
          <View style={styles.variantList}>
            {PRODUCT_VARIANTS.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelectedVariant(item)}
                style={[
                  styles.colorCircle, 
                  { backgroundColor: item.colorCode },
                  selectedVariant.id === item.id && styles.selectedRing
                ]}
              />
            ))}
          </View>
          <Text style={styles.variantName}>{selectedVariant.colorName}</Text>

          {/* Seleção de Tamanhos */}
          <Text style={styles.sectionTitle}>Tamanho:</Text>
          <View style={styles.sizeList}>
            {SIZES.map((size) => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                style={[
                  styles.sizeBox,
                  selectedSize === size && styles.selectedSizeBox
                ]}
              >
                <Text style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText
                ]}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Botão de Compra */}
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>ADICIONAR AO CARRINHO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { width: '100%', height: 400, backgroundColor: '#f5f5f5' },
  mainImage: { width: '100%', height: '100%' },
  detailsContainer: { padding: 20 },
  brand: { color: '#888', fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  price: { fontSize: 20, color: '#2ecc71', fontWeight: 'bold', marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  variantList: { flexDirection: 'row', gap: 15 },
  colorCircle: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#ddd' },
  selectedRing: { borderWidth: 3, borderColor: '#333' },
  variantName: { marginTop: 8, color: '#666', fontStyle: 'italic' },
  sizeList: { flexDirection: 'row', gap: 10 },
  sizeBox: { padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, minWidth: 50, alignItems: 'center' },
  selectedSizeBox: { backgroundColor: '#333', borderColor: '#333' },
  sizeText: { fontWeight: 'bold' },
  selectedSizeText: { color: '#fff' },
  buyButton: { backgroundColor: '#333', padding: 18, borderRadius: 10, marginTop: 30, alignItems: 'center' },
  buyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
