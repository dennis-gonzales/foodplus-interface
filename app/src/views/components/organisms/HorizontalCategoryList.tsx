import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Category from '../atoms/Category';

type HorizontalCategoryListProps = Omit<
  React.ComponentPropsWithoutRef<typeof Category>,
  'category' | 'isActive'
> & {
  categories: string[];
  activeCategory: string | undefined;
};

const HorizontalCategoryList: React.FC<HorizontalCategoryListProps> = ({
  activeCategory,
  categories,
  onCategoryPressed,
}) => {

  console.log('category list - render');

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.category}>
      <Category
      category={item}
      isActive={item === activeCategory}
      onCategoryPressed={onCategoryPressed}
    />
    </View>
  );

  return (
    <FlatList
      data={categories}
      horizontal
      contentContainerStyle={styles.categoriesContainer}
      // extraData={activeCategory}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  category: {
    minHeight: 60,
  },
  categoriesContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
});

export default HorizontalCategoryList;
